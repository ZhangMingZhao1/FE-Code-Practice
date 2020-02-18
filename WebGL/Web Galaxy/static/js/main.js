const cameraFar = 3000; // 镜头视距
const canvas = document.getElementById('main');
let mouse = new THREE.Vector2(); //鼠标屏幕向量
/*画布大小*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scene = new THREE.Scene(); //创建场景

// 相机相关配置
let camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  cameraFar
); //创建透视相机 (参数分别是   FOV:可视角度,  aspect ratio:宽高比,  near:近剪切面,  far:远剪切面)
camera.position.set(-200, 50, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);

// 渲染器
let renderer = new THREE.WebGLRenderer({
  canvas
});
renderer.shadowMap.enabled = true; //辅助线
renderer.shadowMapSoft = true; //柔和阴影
renderer.setClearColor(0xffffff, 0);
// renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染器的宽高


// 初始化太阳配置
let sunMaterialSkin = THREE.TextureLoader('../img/sunSkin.jpg', {}, () => {
  renderer.render(scene, camera);
});

let geometry = new THREE.SphereGeometry(12, 16, 16);
let material = new THREE.MeshLambertMaterial({
  /*color: 0xffff00,*/
  emissive: 0xdd4422,
  map: sunMaterialSkin
});
// let material = new THREE.MeshBasicMaterial({
//   color: 0xff0000
// });
let Sun = new THREE.Mesh(geometry, material); // 通过之前创建的结构体和材质,创建网格
Sun.name = 'Sun';
Sun.castShadow = true;
Sun.receiveShadow = true;
scene.add(Sun);



let control;
const clock = new THREE.Clock(); //用于计算两次animationFrame之间间隔时间

// 创建一个行星
function initStar(name, speed, angle, color, distance, radius, ringMsg) {
  let mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 16, 16),
    new THREE.MeshLambertMaterial({
      color
    })
  );
  mesh.position.x = distance; // 右手坐标系，x即为在同一个平面上行星距离太阳的距离

  // 其他自定义属性
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.name = name;

  let star = {
    name,
    speed,
    angle,
    distance,
    radius,
    Mesh: mesh
  }

  scene.add(mesh);
  return star;
}

const stars = [];
// 创建地球
const Earth = initStar('Earth', 0.010, 0, 'rgb(0,0,255)', 40, 5);
stars.push(Earth);

/*鼠标指针指向响应*/
function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates 
  // (-1 to +1) for both components 
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function init() {
  /*镜头控制*/
  control = new THREE.FirstPersonControls(camera, canvas);
  control.movementSpeed = 100; //镜头移速
  control.lookSpeed = 0.125; //视角改变速度
  control.lookVertical = true; //是否允许视角上下改变
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  window.addEventListener('mousemove', onMouseMove, false);

  renderer.render(scene, camera);
  requestAnimationFrame(move);
}

// 行星公转
function revolution(star) {
  star.angle += star.speed;
  (star.angle > Math.PI * star.distance) && (star.angle -= Math.PI * star.distance);
  star.Mesh.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle));
}

function move() {
  // 行星公转
  stars.map((star) => revolution(star));

  control.update(clock.getDelta()); //此处传入的delta是两次animationFrame的间隔时间，用于计算速度 

  renderer.render(scene, camera);
  requestAnimationFrame(move);
}
init();


// function animate() {
//   // 定义一个animate函数
//   requestAnimationFrame(animate); // 将animate函数作为回调函数传给requestAnimationFrame方法
//   Sun.rotation.x += 0.01; // 旋转网格的x轴
//   Sun.rotation.y += 0.01; // 旋转网格的y轴
//   renderer.render(scene, camera); // 渲染
// }
// animate(); // 执行animate函数

window.onresize = function () {
  // 将函数赋予window.onresize
  camera.aspect = window.innerWidth / window.innerHeight; // 设置相机的宽高比
  camera.updateProjectionMatrix(); // 重新计算投影矩阵
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器宽高
};