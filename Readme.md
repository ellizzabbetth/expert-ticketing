in auth:
docker build -t ellizzabbetth/auth .


https://ticketing.dev/api/users/currentuser


=======
docker pull mongo


Run Tests:
In auth: npm run test

In client: docker build -t ellizzabbetth/client .
docker push ellizzabbetth/client

In orders: docker build -t ellizzabbetth/orders .

To run in browser
=====
ticketing.dev
thisisunsafe

ticketing.dev/auth/signup


COMMON NPMJS
==============
https://www.npmjs.com/settings/elizabethtickets/packages
If edits are in common are needed, the version will be
incremented and common should be published and then pulled
down into common
in common: npm run pub
in auth: npm update @elizabethtickets/common

Common
npm run build
npm run pub


NATS
==============
skaffold dev
kubectl get pods
in nats-test$ kubectl port-forward <nats-depl-8454bc5f97-snw96> 4222:4222
npm run publish


TO delete data
==================
ellizzabbetth@elizabethwin:~/section5-checkpoint/ticketing$ kubectl delete pod nats-depl-746548db6c
-cxxb5