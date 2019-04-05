function creaAlbero() {

  var troncoGeometry = new THREE.BoxGeometry(1, 9, 1);
  var textureTrunkAlbero = THREE.ImageUtils.loadTexture('textures/trunk_texture.jpg');
  var troncoMaterial = new THREE.MeshBasicMaterial({
    map: textureTrunkAlbero
  });
  var tronco = new THREE.Mesh(troncoGeometry, troncoMaterial);
  //tronco.position.set(-1,0,3);

  var foglieGeometry = new THREE.BoxGeometry(5, 2, 5);
  var textureFoglie = new THREE.ImageUtils.loadTexture('textures/foglie_texture.jpg');
  var foglieMaterial = new THREE.MeshBasicMaterial({
    map: textureFoglie
  });
  var foglie = new THREE.Mesh(foglieGeometry, foglieMaterial);

  foglie.position.set(0, 5, 0);

  tronco.add(foglie);

  return tronco;
}
