# Ansible SOP Updater

## Initial setup

install sshpass (required for --ask-pass)

```
brew install https://raw.githubusercontent.com/kadwanev/bigboybrew/master/Library/Formula/sshpass.rb
```
## How to use

Execute **run_sop.sh** script with mode parameter and hosts group specified, eg. \
```
$ ./run_sop.sh report sop_prod
```
 There are currently 5 modes available:

- full-update - performs full firmware update
- config-only - prepares and updates configs for peripherals with values specified in inventory
- report - creates report for SSRU devices and its peripherals
- report-mail - collects all gathered data from report module and e-mails it
- deploy - deploys this project to remote host and creates systemd daemons with scheduler

Modify variables in vars/ according to your needs.