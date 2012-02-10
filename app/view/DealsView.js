Ext.define('Demo.view.DealsView', {
	extend: 'Ext.tab.Panel',
	config: {
		fullscreen: true,
		title: 'List Demo',
		tabBarPosition: 'bottom', 
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
		}, {
			id: 'Demo-List',
			xtype: 'list',
			title: 'Home',
			iconCls: 'home',
			store: 'DealsStore',
			itemTpl: '<table><tr><td width="200"><img src="{image}" height="100" /></td><td>{title}</td></table>'
			
		}, {
			xtype: 'panel',
			title: 'More',
			iconCls: 'more',
			html: ''
		}]
	}
});