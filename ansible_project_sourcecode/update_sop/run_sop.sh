#!/bin/bash
cd "$(dirname "$0")"


if [ -z $1 ]; then
  echo -e "\nYou have to specify run mode and hosts group name. \n mode options: full-update | config-only | report | report-mail | deploy \n \
  Example: to run this script type ./run_sop.sh report sop_prod\n"
elif [ $1 == "report-mail" ]; then
  ANSIBLE_CONFIG=../ansible-linear.cfg ansible-playbook -i ../hosts_prod.yaml sop.yml --extra-vars "mode=$1 hosts_group=$2"
else
  ANSIBLE_CONFIG=../ansible.cfg ansible-playbook -i ../hosts_prod.yaml sop.yml --extra-vars "mode=$1 hosts_group=$2"
fi