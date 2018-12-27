#!/usr/bin/env bash
read -p 'Tag: ' tag;
echo "publishing ericwooley/headless-chrome-node-docker:$tag";
./build.sh $tag;
docker push ericwooley/headless-chrome-node-docker:$tag;

