function creaMacchinaCompleta(){

    /*
		var scene, camera, renderer, controls, stats;
		var macchina_completa;
		var ruota;
		var ruotaGeometry;
		var ruotaMaterial;
		var muso;
		var musoGeometry;
		var musoMaterial;
		var corpo;
		var corpoGeometry;
		var corpoMaterial;
		var alaAnteriore;
		var alaAnterioreGeometry;
		var alaAnterioreMaterial;
		var retro;
		var retroGeometry;
		var retroMaterial;
		var alettone;
		var alettoneGeometry;
		var alettoneMaterial;		
		var tetto;
		var tettoGeometry;
		var tettoMaterial;

		var colore;
     //   function Start() {macchina_completa = new THREE.Object3D();
*/          //var macchina_completa=new THREE.Object3D();
			var colore=(Math.random()*0xffffff);

			var corpoGeometry = new THREE.BoxGeometry(4,1,2);
			var corpoMaterial = new THREE.MeshBasicMaterial({ color: colore, side: THREE.DoubleSide } );
			var corpo=new THREE.Mesh(corpoGeometry,corpoMaterial);
			corpo.position.set(-1,0,0);

			var musoGeometry = new THREE.BoxGeometry(3,1,1);
			var musoMaterial = new THREE.MeshBasicMaterial({ color: colore, side: THREE.DoubleSide } );
			var muso=new THREE.Mesh(musoGeometry,musoMaterial);
			//muso.add(tetto);
			muso.position.set(2.5,0,0);

			var alaAnterioreGeometry=new THREE.BoxGeometry(1,1,3);
			var alaAnterioreMaterial = new THREE.MeshBasicMaterial({ color: colore, side: THREE.DoubleSide } );
			var alaAnteriore=new THREE.Mesh(alaAnterioreGeometry,alaAnterioreMaterial);
			alaAnteriore.position.set(4.5,0,0);

			var retroGeometry=new THREE.BoxGeometry(3,1,1);
			var retroMaterial = new THREE.MeshBasicMaterial({ color: colore, side: THREE.DoubleSide } );
			var retro=new THREE.Mesh(retroGeometry,retroMaterial);
			retro.position.set(-4.5,0,0);

			var tettoGeometry=new THREE.BoxGeometry(3,1,1)
			var tettoMaterial = new THREE.MeshBasicMaterial({ color: colore, side: THREE.DoubleSide } );
			var tetto=new THREE.Mesh(tettoGeometry,tettoMaterial);
			tetto.position.set(-2,1,0);

			var alettone=new THREE.Mesh(alaAnterioreGeometry,alaAnterioreMaterial); //alettone=ala anteriore
			alettone.position.set(-5.5,1,0);

			var ruotaGeometry=new THREE.BoxGeometry(1,1,1);
			var ruotaMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide } );
			ruota=[];
			for (i=0; i<4; i++){
				ruota[i] = new THREE.Mesh(ruotaGeometry,ruotaMaterial);
				corpo.add(ruota[i]);
			}
			ruota[0].position.set(2.5,0,1);
			ruota[1].position.set(2.5,0,-1);
			ruota[2].position.set(-4,0,1);
			ruota[3].position.set(-4,0,-1);


			corpo.add(tetto);
			corpo.add(alettone);
			corpo.add(retro);
			corpo.add(alaAnteriore);
			corpo.add(muso);
            corpo.add(corpo);

            return corpo;
        }
