Ext.define('Demo.view.DealsView', {
	extend: 'Ext.List',
	id: 'Demo-List',
	config: {
		fullscreen: true,
		title: 'List Demo',
		store: 'DealsStore',
		itemTpl: '<table><tr><td width="200"><img src="{image}" height="100" /></td><td>{title}</td></table>',
		items: [{
			xtype: 'navigationbar',
            title: 'List Demo',
            docked: 'top',
            defaults: {
            	iconMask: true,
            	ui: 'plain'
            },
            items: [{
            	id: 'refresh',
       			iconCls: 'refresh',
       			align: 'right'
            }]
		}]
	}
});