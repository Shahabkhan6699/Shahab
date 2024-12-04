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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "zula.ir",
            "port": 2096,
            "users": [
              {
                "id": "6726c108-2775-47e5-8f82-eae02fc2a3d1",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2048",
          "headers": {
            "Host": "shahabir.divop30325.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "shahabir.divop30325.workers.dev",
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
      "tag": "proxy-2",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "zula.ir",
            "port": 8443,
            "users": [
              {
                "id": "6726c108-2775-47e5-8f82-eae02fc2a3d1",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2048",
          "headers": {
            "Host": "shahabir.divop30325.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "shahabir.divop30325.workers.dev",
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
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "shahabir.divop30325.workers.dev",
            "port": 2087,
            "users": [
              {
                "id": "6726c108-2775-47e5-8f82-eae02fc2a3d1",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2048",
          "headers": {
            "Host": "shahabir.divop30325.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "shahabir.divop30325.workers.dev",
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
      "tag": "proxy-4",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "zula.ir",
            "port": 8443,
            "users": [
              {
                "id": "6726c108-2775-47e5-8f82-eae02fc2a3d1",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2048",
          "headers": {
            "Host": "shahabir.divop30325.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "shahabir.divop30325.workers.dev",
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
      "tag": "proxy-5",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.gov.se",
            "port": 80,
            "users": [
              {
                "id": "30b24288-2c31-47ea-a9c2-238594361c16",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2560",
          "headers": {
            "Host": "shahhh.shahababolhasani.workers.dev"
          }
        }
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "proxy-6",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.gov.se",
            "port": 2082,
            "users": [
              {
                "id": "30b24288-2c31-47ea-a9c2-238594361c16",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws#Misaka-cf-vless-2082vless://30b24288-2c31-47ea-a9c2-238594361c16@www.gov.se:8880?path=/%3Fed%3D2560",
        "wsSettings": {
          "path": "/%3Fed%3D2560",
          "headers": {
            "Host": "shahhh.shahababolhasani.workers.dev"
          }
        }
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "proxy-7",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.gov.se",
            "port": 8080,
            "users": [
              {
                "id": "30b24288-2c31-47ea-a9c2-238594361c16",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2560",
          "headers": {
            "Host": "shahhh.shahababolhasani.workers.dev"
          }
        }
      },
      "mux": {
        "enabled": false,
        "concurrency": -1
      }
    },
    {
      "tag": "proxy-8",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "zula.ir",
            "port": 8443,
            "users": [
              {
                "id": "a5bb0cfc-b7ab-48d1-93f1-e1abfb60fc13",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2048",
          "headers": {
            "Host": "tuneli.mwfpcw.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "tuneli.mwfpcw.workers.dev",
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
      "tag": "proxy-9",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.visa.com.sg",
            "port": 8443,
            "users": [
              {
                "id": "f2f094df-58c3-443a-a57d-e01282658043",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2560",
          "headers": {
            "Host": "kivi.mwfpcw.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "kivi.mwfpcw.workers.dev",
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
      "tag": "proxy-10",
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "www.visa.com.sg",
            "port": 443,
            "users": [
              {
                "id": "f2f094df-58c3-443a-a57d-e01282658043",
                "alterId": 0,
                "email": "t@t.tt",
                "security": "auto",
                "encryption": "none",
                "flow": ""
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "ws",
        "wsSettings": {
          "path": "/%3Fed%3D2560",
          "headers": {
            "Host": "kivi.mwfpcw.workers.dev"
          }
        },
        "security": "tls",
        "tlsSettings": {
          "allowInsecure": true,
          "serverName": "kivi.mwfpcw.workers.dev",
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
      "sampling": 2,
      "timeout": "3s"
    },
    "subjectSelector": [
      "proxy-1",
      "proxy-2",
      "proxy-3",
      "proxy-4",
      "proxy-5",
      "proxy-6",
      "proxy-7",
      "proxy-8",
      "proxy-9",
      "proxy-10"
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
          "proxy-3",
          "proxy-4",
          "proxy-5",
          "proxy-6",
          "proxy-7",
          "proxy-8",
          "proxy-9",
          "proxy-10"
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
