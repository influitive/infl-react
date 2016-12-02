#! /bin/bash
kotatsu serve \
  -c ./config/webpack/ \
  -p 3069 \
  -m app
  --devtool \\#eval-source-map \
