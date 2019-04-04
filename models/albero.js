function creaAlbero() {

  var textureTrunkAlbero = THREE.ImageUtils.loadTexture('textures/trunk_texture.jpg');

  var troncoGeometry = new THREE.BoxGeometry(2,0,1);
  var troncoMaterial = new THREE.MeshBasicMaterial({map: textureTrunkAlbero, side: THREE.DoubleSide});

  var tronco = new THREE.Mesh(troncoGeometry,troncoMaterial);
  tronco.position.set(-1,0,3);

  return tronco;
}
