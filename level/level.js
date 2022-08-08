module.exports = RED => {
	let ui;

	RED.nodes.registerType( 'ui_simple_level', function( config ) {
		RED.nodes.createNode( this, config );

		if( !ui ) {
			try {
				ui = RED.require( 'node-red-dashboard' )( RED );
			} catch {}
		}

		if( !!ui && !!RED.nodes.getNode( config.group ) ) {
			this.on( 'close', ui.addWidget( {
				node: this,
				format: `
					<div style="height: 100%;" ng-init="green = ${ +config.green || 50 }; orange = ${ +config.orange || 75 }">
						<div style="height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
							<div style="text-align: center; font-size: 15px; font-weight: bold;">${ config.name }</div>
							<div style="height: {{ lvl }}%; background-color: {{ col }};"></div>
						</div>
						<div style="position: absolute; left: 0; right: 0; bottom: 0; text-align: center; margin: 5px; font-size: 15px; font-weight: bold;">{{ lvl }}%</div>
					</div>
				`,
				width: +config.width || 2,
				height: +config.height || 4,
				group: config.group,
				order: +config.order,
				beforeEmit: msg => ( { msg } ),
				initController: $scope => $scope.$watch( 'msg.payload', payload => {
					let lvl = +payload || 0;

					if( lvl < 1 ) {
						lvl = 1;
					} else if( lvl > 100 ) {
						lvl = 100
					}

					$scope.lvl = lvl;

					if( lvl <= $scope.green ) {
						$scope.col = '#96cd56';
					} else if( lvl <= $scope.orange ) {
						$scope.col = '#f8bf2a';
					} else {
						$scope.col = '#f32d1f';
					}
				} )
			} ) );
		}
	} );
};