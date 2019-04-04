function creaAlbero() {

  
  var troncoGeometry = new THREE.BoxGeometry(1,9,1);
  var textureTrunkAlbero = THREE.ImageUtils.loadTexture('textures/trunk_texture.jpg');
  var troncoMaterial = new THREE.MeshBasicMaterial({map: textureTrunkAlbero});
  var tronco = new THREE.Mesh(troncoGeometry,troncoMaterial);
  //tronco.position.set(-1,0,3);

  return tronco;
}
