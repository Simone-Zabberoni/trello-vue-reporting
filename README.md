# trello-vue-reporting

Create reports from your Trello boards, ready for pdf or copy/paste.

Toggle show/hide for labels, comments etc..


## Live demo

You can try the reporting tool here: http://trello-vue-report.s3-website-eu-west-1.amazonaws.com/ OR http://www.facciocose.eu/trello


## Run

```
$ npm install
[.....]

$ npm run serve

DONE  Compiled successfully in xx ms

  App running at:
  - Local:   http://localhost:8081/
  - Network: http://<your_ip_address>:8081/

  Note that the development build is not optimized.
  To create a production build, run npm run build.

```

## Docker support

I've provided a multistage Dockerfile to obtain the smallest possible container.
Build and run it with the provided scripts:

```
# ./build-docker.sh
[...]

# ./run-docker.sh
Starting dockerized app on http://yourdocker:8081
```

Here's a comparison on docker images's size:

```
# docker images --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}"
REPOSITORY                   TAG                 SIZE
trello-vue-report            latest              11.1MB
<none>                       <none>              236MB
alpine                       latest              4.41MB
node                         8.6-alpine          67.2MB
```

The 236MB image is the node image with full node_modules installation, while the final nginx image is only 11.1MB.



## Todo list
- view/hide for all card attributes
- view/hide for lists
- logoff implementation
- check if already logged in
- better css styling
- more card details (due date, assignee, checklists)






