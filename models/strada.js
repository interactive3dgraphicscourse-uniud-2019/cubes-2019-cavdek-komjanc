function creaStrada() {

  var stradaGeometry = new THREE.BoxGeometry(130,0.2,18);
  var textureStrada = new THREE.ImageUtils.loadTexture('textures/road.jpg');
  var stradaMaterial = new THREE.MeshBasicMaterial({map: textureStrada});
  var strada = new THREE.Mesh(stradaGeometry,stradaMaterial);
  
  return strada;
}
