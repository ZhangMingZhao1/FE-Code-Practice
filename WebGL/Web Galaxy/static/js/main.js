const cameraFar = 3000; // 镜头视距
const canvas = document.getElementById("main");

/*画布大小*/
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let scene = new THREE.Scene(); //创建场景

let raycaster = new THREE.Raycaster(); //这个类用于进行raycasting（光线投射）。 光线投射用于进行鼠标拾取（在三维空间中计算出鼠标移过了什么物体）。
let mouse = new THREE.Vector2(); //鼠标屏幕向量
let starNames = {}; //指向显示的星星名字对象
let displayName; //当前显示名字

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

// !初始化太阳配置
let sunMaterialSkin = new THREE.TextureLoader().load("../img/sunSkin.jpg");

let geometry = new THREE.SphereGeometry(12, 16, 16);
let material = new THREE.MeshBasicMaterial({
  /*color: 0xffff00,*/
  // emissive: 0xdd4422,
  map: sunMaterialSkin
});
// let material = new THREE.MeshBasicMaterial({
//   color: 0xff0000
// });
let Sun = new THREE.Mesh(geometry, material); // 通过之前创建的结构体和材质,创建网格

Sun.name = "Sun";
Sun.castShadow = true;
Sun.receiveShadow = true;
scene.add(Sun);

// 太阳蒙层
let opSun = new THREE.Mesh(
  new THREE.SphereGeometry(14, 16, 16),
  new THREE.MeshLambertMaterial({
    color: 0xff0000,
    /*emissive: 0xdd4422,*/
    transparent: true,
    opacity: 0.35
  })
);

opSun.name = "Sun";
scene.add(opSun);

// !光源

//环境光
let ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);
/*太阳光*/
let sunLight = new THREE.PointLight(0xddddaa, 1.5, 500);
scene.add(sunLight);

let control;
const clock = new THREE.Clock(); //用于计算两次animationFrame之间间隔时间

// 创建一个行星
/***
 * @param distance x轴距离
 * @param color 轨道颜色
 */
function initStar(name, speed, angle, color, distance, volume, ringInfo) {
  let mesh = new THREE.Mesh(
    new THREE.SphereGeometry(volume, 16, 16),
    new THREE.MeshLambertMaterial({
      color
    })
  );
  mesh.position.x = distance; // 右手坐标系，x即为在同一个平面上行星距离太阳的距离

  // 其他自定义属性
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  mesh.name = name;
  // !行星轨道
  let track = new THREE.Mesh(
    new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64, 1),
    new THREE.MeshBasicMaterial({
      color: 0x888888,
      side: THREE.DoubleSide
    })
  );

  track.rotation.x = -Math.PI / 2;
  scene.add(track);

  let star = {
    name,
    speed,
    angle,
    distance,
    volume,
    Mesh: mesh
  };

  // 有行星环的情况
  /*如果有碎星带*/
  if (ringInfo) {
    console.log("进入了ring,Info为", ringInfo);
    let ring = new THREE.Mesh(
      new THREE.RingGeometry(ringInfo.innerRedius, ringInfo.outerRadius, 32, 6),
      new THREE.MeshBasicMaterial({
        color: ringInfo.color,
        side: THREE.DoubleSide,
        opacity: 0.7,
        transparent: true
      })
    );

    ring.name = `Ring of ${name}`;
    ring.rotation.x = -Math.PI / 3;
    ring.rotation.y = -Math.PI / 4;
    scene.add(ring);

    star.ring = ring;
  }

  scene.add(mesh);
  return star;
}
let Mercury, //水
  Venus, //金
  Earth,
  Mars, //火
  Jupiter, //木
  Saturn, //土
  Uranus, //天王
  Neptune, //海王
  stars = [];

/*鼠标指针指向响应*/
function onMouseMove(event) {
  // calculate mouse position in normalized device coordinates
  // (-1 to +1) for both components
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
// ! 显示行星名字
function starVis() {
  /*根据行星名字和体积构造显示名字*/
  let loader = new THREE.FontLoader();

  function nameConstructor(name, volume) {
    loader.load("../lib/helvetiker_regular.typeface.json", function(font) {
      // console.log("font", font);
      let geometry = new THREE.TextGeometry(name, {
        font: font,
        size: 4,
        height: 4
      });
    });
    let planetName = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
      })
    );
    planetName.volume = volume;
    planetName.visible = false;
    starNames[name] = planetName;
    scene.add(planetName);
  }
  // console.log("star", stars);
  stars.forEach((star) => {
    console.log(star);
    nameConstructor(star.name, stars.volume);
  });
  nameConstructor("Sun", 12);
}

function init() {
  // !创建地球和其他八大行星
  Earth = initStar("Earth", 0.01, 0, "rgb(0,0,255)", 40, 5);
  stars.push(Earth);
  Mercury = initStar("shuixing", 0.02, 0, "rgb(124,131,203)", 20, 2);
  stars.push(Mercury);
  Venus = initStar("jinxing", 0.012, 0, "rgb(190,138,44)", 30, 4);
  stars.push(Venus);

  Mars = initStar("huoxing", 0.008, 0, "rgb(210,81,16)", 50, 4);
  stars.push(Mars);
  Jupiter = initStar("muxing", 0.006, 0, "rgb(254,208,101)", 70, 9);
  stars.push(Jupiter);

  Uranus = initStar("tianwangxing", 0.003, 0, "rgb(49,168,218)", 120, 4);
  stars.push(Uranus);

  Neptune = initStar("haiwangxing", 0.002, 0, "rgb(84,125,204)", 150, 3);
  stars.push(Neptune);

  // 土星和土星环
  Saturn = initStar("tuxing", 0.005, 0, "rgb(210,140,39)", 100, 7, {
    color: "rgb(136,75,30)",
    innerRedius: 9,
    outerRadius: 11
  });
  stars.push(Saturn);

  // 初始化行星名字
  starVis();

  /*镜头控制*/
  control = new THREE.FirstPersonControls(camera, canvas);
  control.movementSpeed = 100; //镜头移速
  control.lookSpeed = 0.125; //视角改变速度
  control.lookVertical = true; //是否允许视角上下改变
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  window.addEventListener("mousemove", onMouseMove, false);

  renderer.render(scene, camera);
  requestAnimationFrame(move);
}

function move() {
  //太阳自转

  Sun.rotation.y += 0.008; // 旋转网格的x轴
  // Sun.rotation.z += 0.01; // 旋转网格的y轴
  // 行星公转
  stars.map((star) => revolution(star));

  control.update(clock.getDelta()); //此处传入的delta是两次animationFrame的间隔时间，用于计算速度

  /*限制相机在xyz正负400以内*/
  camera.position.x = THREE.Math.clamp(camera.position.x, -400, 400);
  camera.position.y = THREE.Math.clamp(camera.position.y, -400, 400);
  camera.position.z = THREE.Math.clamp(camera.position.z, -400, 400);

  /*鼠标指向行星显示名字*/
  raycaster.setFromCamera(mouse, camera);
  /*交汇点对像*/
  let intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    /*取第一个交汇对像（最接近相机）*/
    let obj = intersects[0].object;

    let name = obj.name;
    /*把上一个显示隐藏*/
    displayName && (displayName.visible = false);

    /*如果是有设定名字的东西*/
    if (starNames[name]) {
      console.log("starNames", starNames);
      starNames[name].visible = true;
      displayName = starNames[name];
      /*复制行星位置*/
      displayName.position.copy(obj.position);
      /*文字居中*/
      displayName.geometry.center();
      /*显示在行星的上方（y轴）*/
      displayName.position.y = starNames[name].volume + 4;
      /*面向相机*/
      displayName.lookAt(camera.position);
    }
  } else {
    displayName && displayName.visible && (displayName.visible = false);
  }

  renderer.render(scene, camera);
  requestAnimationFrame(move);
}
init();

window.onresize = function() {
  // 将函数赋予window.onresize
  camera.aspect = window.innerWidth / window.innerHeight; // 设置相机的宽高比
  camera.updateProjectionMatrix(); // 重新计算投影矩阵
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器宽高
};

// 行星公转
function revolution(star) {
  star.angle += star.speed;
  star.angle > Math.PI * star.distance &&
    (star.angle -= Math.PI * star.distance);
  star.Mesh.position.set(
    star.distance * Math.sin(star.angle),
    0,
    star.distance * Math.cos(star.angle)
  );
}
