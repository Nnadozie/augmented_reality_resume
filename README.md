# A resume viewable in augmented reality.

To use, fork, replace the links in pages/cv.tsx with links to your own 3d resume assets and yeah, host it.

Uses 
- an AWS S3 bucket to host the static 3d assets
- Google's [model-viewer web component](https://modelviewer.dev/) to display the assets
- Blender to create the 3d assets: I export glb then convert to usdz using [this docker container](https://github.com/leon/docker-gltf-to-udsz) that builds Google's [usd_from_gltf converter](https://github.com/google/usd_from_gltf).
- NextJs because I intend to convert this repo into a blog/portfolio



