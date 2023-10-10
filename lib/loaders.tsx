import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Scene, Object3D, Mesh } from "three";

interface LoadOptions {
  receiveShadow?: boolean;
  castShadow?: boolean;
}

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options: LoadOptions = {}
): Promise<Object3D> {
  const { receiveShadow = true, castShadow = true } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "gaming-room";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if ((child as Mesh).isMesh) {
            (child as Mesh).castShadow = castShadow;
            (child as Mesh).receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
