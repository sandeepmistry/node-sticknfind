var async = require('async');

var StickNFind = require('./index');

StickNFind.discover(function(sticknfind) {
  sticknfind.once('disconnect', function() {
    process.exit(0);
  });  

  async.series([
    function(callback) {
      console.log('connect');
      sticknfind.connect(callback);
    },
    function(callback) {
      console.log('discoverServicesAndCharacteristics');
      sticknfind.discoverServicesAndCharacteristics(callback);
    },
    function(callback) {
      console.log('readDeviceName');
      sticknfind.readDeviceName(function(deviceName) {
        console.log('device name = ' + deviceName);

        callback();
      });
    },
    function(callback) {
      console.log('writeDeviceName');
      sticknfind.writeDeviceName('StickNfind - 1', function() {
        callback();
      });
    },
    function(callback) {
      console.log('readManufacturerName');
      sticknfind.readManufacturerName(function(manufacturerName) {
        console.log('manufacturer name = ' + manufacturerName);

        callback();
      });
    },
    function(callback) {
      console.log('readModelNumber');
      sticknfind.readModelNumber(function(modelNumber) {
        console.log('model number = ' + modelNumber);

        callback();
      });
    },
    function(callback) {
      console.log('readSerialNumber');
      sticknfind.readSerialNumber(function(serialNumber) {
        console.log('serial number = ' + serialNumber);

        callback();
      });
    },
    function(callback) {
      console.log('readHardwareRevision');
      sticknfind.readHardwareRevision(function(hardwareRevision) {
        console.log('hardware revision = ' + hardwareRevision);

        callback();
      });
    },
    function(callback) {
      console.log('readSoftwareRevision');
      sticknfind.readSoftwareRevision(function(softwareRevision) {
        console.log('software revision = ' + softwareRevision);

        callback();
      });
    },
    function(callback) {
      console.log('readAlertLevel');
      sticknfind.readAlertLevel(function(alertLevel) {
        console.log('alert level = ' + alertLevel);

        callback();
      });
    },
    function(callback) {
      console.log('writeAlertLevel');
      sticknfind.writeAlertLevel('mild', function(alertLevel) {
        callback();
      });
    },
    function(callback) {
      setTimeout(callback, 1000);
    },
    function(callback) {
      console.log('writeAlertLevel');
      sticknfind.writeAlertLevel('none', function(alertLevel) {
        callback();
      });
    },
    function(callback) {
      console.log('readTxPowerLevel');
      sticknfind.readTxPowerLevel(function(txPowerLevel) {
        console.log('TX power level = ' + txPowerLevel);

        callback();
      });
    },
    function(callback) {
      console.log('readBatteryLevel');
      sticknfind.readBatteryLevel(function(batteryLevel) {
        console.log('battery level = ' + batteryLevel);

        callback();
      });
    },
    function(callback) {
      console.log('disconnect');
      sticknfind.disconnect(callback);
    }
  ]);
});
