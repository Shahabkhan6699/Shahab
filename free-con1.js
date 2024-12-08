{
  "remarks": "Xray-Load-Balancer (Surfboardv2ray)",
  "log": {
    "access": "",
    "error": "",
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "tag": "socks",
      "port": 10808,
      "listen": "0.0.0.0",
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": false
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "tag": "http",
      "port": 10809,
      "listen": "0.0.0.0",
      "protocol": "http",
      "sniffing": {
        "enabled": true,
        "destOverride": [
          "http",
          "tls"
        ],
        "routeOnly": false
      },
      "settings": {
        "auth": "noauth",
        "udp": true,
        "allowTransparent": false
      }
    },
    {
      "tag": "api",
      "port": 10813,
      "listen": "127.0.0.1",
      "protocol": "dokodemo-door",
      "settings": {
        "udp": false,
        "address": "127.0.0.1",
        "allowTransparent": false
      }
    }
  ],
  "outbounds": [
    {
      "tag": "proxy-1",
      "protocol": "trojan",
      "settings": {
        "servers": [
          {
            "address": "172.64.128.0",
            "method": "chacha20",
            "ota": false,
            "password": "bpb-trojan",
            "port": 443,
            "level": 1,
            "flow": ""
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/bpb.my79801.com/tr%3Fed%3D2560",
          "headers": {
            "Host": "hop.mwfpcw.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "hop.mwfpcw.workers.dev",
          "alpn": [
            "h3"
          ],
          "show": false
        }
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "proxy-2",
      "protocol": "trojan",
      "settings": {
        "servers": [
          {
            "address": "172.64.128.0",
            "method": "chacha20",
            "ota": false,
            "password": "blue2024",
            "port": 443,
            "level": 1,
            "flow": ""
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/td.promote.icu/%3Fed%3D2560",
          "headers": {
            "Host": "hop.mwfpcw.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "hop.mwfpcw.workers.dev",
          "alpn": [],
          "show": false
        }
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "proxy-3",
      "protocol": "vmess",
      "settings": {
        "vnext": [
          {
            "address": "38.99.82.128",
            "port": 22324,
            "users": [
              {
                "id": "04621bae-ab36-11ec-b909-0242ac120002",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp"
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "protocol": "freedom",
      "tag": "direct-out"
    }
  ],
  "stats": {},
  "api": {
    "tag": "api",
    "services": [
      "StatsService"
    ]
  },
  "policy": {
    "system": {
      "statsOutboundUplink": true,
      "statsOutboundDownlink": true
    }
  },
  "burstObservatory": {
    "pingConfig": {
      "connectivity": "http://connectivitycheck.platform.hicloud.com/generate_204",
      "destination": "http://www.google.com/gen_204",
      "interval": "15m",
      "sampling": 10,
      "timeout": "3s"
    },
    "subjectSelector": [
      "proxy-1",
      "proxy-2",
      "proxy-3"
    ]
  },
  "dns": {
    "hosts": {
      "domain:googleapis.cn": "googleapis.com"
    },
    "servers": [
      "1.1.1.1"
    ]
  },
  "routing": {
    "balancers": [
      {
        "selector": [
          "proxy-1",
          "proxy-2",
          "proxy-3"
        ],
        "strategy": {
          "type": "leastLoad"
        },
        "tag": "xray-load-balancer"
      }
    ],
    "domainMatcher": "hybrid",
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "balancerTag": "xray-load-balancer",
        "inboundTag": [
          "socks",
          "http"
        ],
        "type": "field"
      }
    ]
  }
}
