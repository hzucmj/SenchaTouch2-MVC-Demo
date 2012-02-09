Ext.Loader.setConfig({
	enabled: true
});
Ext.application({
	name: 'Demo',
	appFloder: 'app',
	controllers: ['DealsItem'],
	launch: function(){
        Ext.create('Demo.view.DealsView');
    }    
});