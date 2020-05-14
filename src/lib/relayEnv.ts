import {
    Environment,
    Network,
    RecordSource,
    Store,
    Observable,
    GraphQLResponse,
  } from 'relay-runtime';

  import { SubscriptionClient } from 'subscriptions-transport-ws'
import { RelayObservable } from 'relay-runtime/lib/network/RelayObservable';

  const API_URL = process.env.REACT_APP_API_URL;
  const WS_URL = process.env.REACT_APP_WS_URL;

  function fetchQuery(
    operation : any,
    variables : any,
  ) {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem("jwt")}`
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => {
      return response.json();
    });
  }


  const setupSubscription = (config, variables) => {
    const query = config.text
    const subscriptionClient = new SubscriptionClient(`${WS_URL}?auth=${localStorage.getItem("jwt")}`,
      {
        reconnect: true
      });    
    return Observable.create<GraphQLResponse>(sink => {
        const c = subscriptionClient.request({ query, variables }).subscribe({
          next: result => {
            console.log(result)
            sink.next({data: result.data})
          }
        });
        return {
          unsubscribe: c.unsubscribe,
          closed: false
        }
    });
}
  const environment = new Environment({
    network: Network.create(fetchQuery, setupSubscription),
    store: new Store(new RecordSource()),  
  });
  
  export default environment