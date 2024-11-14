import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

window.addEventListener("DOMContentLoaded", () => {
  // 장면 생성
  const scene = new THREE.Scene();

  // .sc-intro 섹션 선택
  const introSection = document.querySelector(".sc-intro");
  const rect = introSection.getBoundingClientRect();

  // 카메라 생성
  const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
  camera.position.z = 5; // 카메라 위치 설정

  // 렌더러 생성
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true }); // 배경을 투명하게 설정
  renderer.setSize(rect.width, rect.height);
  renderer.setPixelRatio(window.devicePixelRatio); // 고해상도 디스플레이에 최적화
  renderer.setClearColor(0x000000, 0); // 배경색 제거
  introSection.appendChild(renderer.domElement);

  // GLTF 로더 생성
  const loader = new GLTFLoader();

  // 3D 객체 로드
  loader.load(
    "/objects/main-star.gltf",
    (gltf) => {
      const object = gltf.scene;
      scene.add(object);

      // 객체 초기 설정
      object.position.set(5, -3.3, 0); // 객체 배치 위치
      object.scale.set(4, 4, 2); // 객체 크기
      object.rotation.y = THREE.MathUtils.degToRad(-60); // 객체 y축 회전
      object.rotation.z = THREE.MathUtils.degToRad(-2); // 객체 z축 회전

      // 스크롤 애니메이션 목표 값
      let targetRotationY = object.rotation.y;

      // 애니메이션 루프 (부드러운 보간 적용)
      function animate() {
        requestAnimationFrame(animate);

        // 목표 회전 값에 대한 보간 처리
        object.rotation.y += (targetRotationY - object.rotation.y) * 0.1;

        renderer.render(scene, camera);
      }
      animate();

      // 리사이즈 이벤트 처리
      window.addEventListener("resize", () => {
        const rect = introSection.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height);
        camera.aspect = rect.width / rect.height;
        camera.updateProjectionMatrix();
      });

      // 스크롤 이벤트 처리
      let lastScrollTop = 0;

      window.addEventListener("scroll", () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
          targetRotationY -= 0.004; // 아래로 스크롤
        } else {
          targetRotationY += 0.004; // 위로 스크롤
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
      });
    },
    undefined,
    (error) => {
      console.error("An error happened", error);
    }
  );

  // 조명 추가
  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 40);
  directionalLight1.position.set(20, 20, 20).normalize();
  scene.add(directionalLight1);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 40);
  directionalLight2.position.set(-20, -20, -20).normalize();
  scene.add(directionalLight2);

  const ambientLight = new THREE.AmbientLight(0x404040); // 부드러운 환경광 추가
  scene.add(ambientLight);
});
