Ext.define('Demo.controller.DealsItem', {
	extend: 'Ext.app.Controller',
	views: ['DealsView'],
	stores: ['DealsStore'],
	config: {
		
	},
	init: function(){
		this.control({
			'#Demo-List': {
				'itemtap': this.onItemtap
			},
			'#refresh': {
				'tap': this.onRefresh
			}
		});
	},
	onItemtap: function(dataview, index, target, record, event) {
		Ext.Msg.confirm('Tips', 'Would you want to see more detail?', function(btnId){
			if (btnId == 'yes') {
				var site = dataview.getStore().getAt(index).get('url');
				console.log('See more details ...');
				window.open(site);
			}	
		});
	},
	onRefresh: function() {
		console.log('Refresh list ...');
		Ext.getCmp('Demo-List').getStore().load();
	}
});