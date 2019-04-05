function creaGuardRail() {

  var guardRailGeometry = new THREE.BoxGeometry(100,0.5,1);
  var textureGuardRail = new THREE.ImageUtils.loadTexture('textures/guardRail.jpg');
  var guardRailMaterial = new THREE.MeshBasicMaterial({map: textureGuardRail});
  var guardRail=new THREE.Mesh(guardRailGeometry,guardRailMaterial);
   
 

  return guardRail;
}
