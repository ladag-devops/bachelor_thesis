#!/bin/bash

node /usr/jrd/scripts/reset_rf_adapter.js 
sleep 1
  for i in {1..20}
  do
    /usr/jrd/scripts/list-usb-devices.sh | grep Nordic
      if [[ $? == 1 ]]
      then
        node /usr/jrd/scripts/reset_rf_adapter.js 
        sleep 1
      else
        echo "Device resetted successfuly."
        exit 0;
      fi
    
  done

echo 'Failed to find device after resets.'
exit 1;