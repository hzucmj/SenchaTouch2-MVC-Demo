Ext.define('Demo.store.DealsStore', {
	extend: 'Ext.data.Store',
	model: 'Demo.model.DealsItem',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: './app/data/data.json',
		reader: {
			type: 'json',
			root: 'Dealsitem'
		}
	},
	initialize: function(){
		this.callParent();
	}
});