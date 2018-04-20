import ip from 'ip'

export default {
  server: 'http://' + ip.address() + ':8088',
  upload: 'http://' + ip.address() + ':8088',
  domainName: 'http://' + ip.address() + ':8080'
}
