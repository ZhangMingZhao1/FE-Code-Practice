var scene = new THREE.Scene(); //创建场景
var camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
); //创建透视相机 (参数分别是   FOV:可视角度,  aspect ratio:宽高比,  near:近剪切面,  far:远剪切面)
var renderer = new THREE.WebGLRenderer(); //创建渲染器
renderer.setSize(window.innerWidth, window.innerHeight); //设置渲染器的宽高
document.body.appendChild(renderer.domElement); // 将渲染器的dom添加进body中
renderer.render(scene, camera); // 将场景和相机交给渲染器进行渲染

var geometry = new THREE.BoxGeometry(1, 1, 1); // 创建一个方块结构体,长宽高都为1
var material = new THREE.MeshBasicMaterial({ color: 0x123456 }); // 创建一个网格基础材质,颜色使用16进制设为0x123456
var cube = new THREE.Mesh(geometry, material); // 通过之前创建的结构体和材质,创建网格
scene.add(cube); // 将网格添加到场景中
camera.position.z = 10; // 移动相机z轴位置
renderer.render(scene, camera); // 再次渲染

function animate() {
  // 定义一个animate函数
  requestAnimationFrame(animate); // 将animate函数作为回调函数传给requestAnimationFrame方法
  cube.rotation.x += 0.01; // 旋转网格的x轴
  cube.rotation.y += 0.01; // 旋转网格的y轴
  renderer.render(scene, camera); // 渲染
}
animate(); // 执行animate函数

window.onresize = function() {
  // 将函数赋予window.onresize
  camera.aspect = window.innerWidth / window.innerHeight; // 设置相机的宽高比
  camera.updateProjectionMatrix(); // 重新计算投影矩阵
  renderer.setSize(window.innerWidth, window.innerHeight); // 设置渲染器宽高
};
