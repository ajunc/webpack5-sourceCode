{
  "errors": [], //编译中有没有错误
  "warnings": [], // 编译中有没有警告
  "version": "4.46.0", // 编译时用的webpack版本号
  "hash": "262a9ef7bcccdfc6b940", // 本次编译的哈希
  "time": 1390, // 共耗费时间  单位ms
  "builtAt": 1649097994872, // 构建时间
  "publicPath": "", // 访问路径 output publicpath
  "outputPath": "D:\\webpack-sourcecode\\webpack-project\\dist", // 输出目录
  "assetsByChunkName": { // 产出资源的代码块名字
    "main": "main-262a9e.js"  // chunk名字
  },
  "assets": [ // 产出资源
    {
      "name": "0-262a9e.js", // 生成文件名
      "size": 730, // 预估文件大小
      "chunks": [ // 这个文件包含的代码块
        0
      ],
      "chunkNames": [], // 代码块名字
      "info": {
        "immutable": true
      },
      "emitted": true // 是否文件已经生成
    },
    {
      "name": "3ba1db5cc0555c3eca0e64dc7e1db543.woff2",
      "size": 1852,
      "chunks": [],
      "chunkNames": [],
      "info": {
        "immutable": true,
        "sourceFilename": "src/webfont.woff2"
      },
      "emitted": true
    },
    {
      "name": "images/logo.png",
      "size": 11224,
      "chunks": [],
      "chunkNames": [],
      "info": {
        "sourceFilename": "src/images/logo.png"
      },
      "emitted": true
    },
    {
      "name": "index.html",
      "size": 276,
      "chunks": [],
      "chunkNames": [],
      "info": {},
      "emitted": true
    },
    {
      "name": "main-262a9e.js",
      "size": 200763,
      "chunks": [
        "main"
      ],
      "chunkNames": [
        "main"
      ],
      "info": {
        "immutable": true
      },
      "emitted": true
    }
  ],
  "filteredAssets": 0, // 过滤的资源
  "entrypoints": { // 入口点  入库文件
    "main": {
      "chunks": [
        "main"
      ],
      "assets": [
        "main-262a9e.js"
      ],
      "children": {},
      "childAssets": {}
    }
  },
  "namedChunkGroups": { // 有名字的代码块组
    "main": {
      "chunks": [
        "main"
      ],
      "assets": [
        "main-262a9e.js"
      ],
      "children": {},
      "childAssets": {}
    }
  },
  "chunks": [ // 代码块s
    {
      "id": 0,
      "rendered": true,
      "initial": false, // 是否同步初始化
      "entry": false,
      "size": 31,
      "names": [],
      "files": [
        "0-262a9e.js"
      ],
      "hash": "fb96f11a8479393dff93", // chunkHash
      "siblings": [], // 兄弟们
      "parents": [ // 父亲是main
        "main"
      ],
      "children": [], // 未异步加载别的模块 []
      "childrenByOrder": {},
      "modules": [
        {
          "id": "./src/a.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\a.js",
          "name": "./src/a.js",
          "index": 35,
          "index2": 35,
          "size": 31,
          "cacheable": true,
          "built": true, // 是否经过loader编译
          "optional": false, // try catch
          "prefetched": false, // 是否要预取
          "chunks": [
            0
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js", // 哪个模块用
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {  // 性能指标
                "factory": 26, // 工程创建模块的时间
                "building": 17 // loader编译时间
              }
            }
          ],
          "profile": {
            "factory": 549,
            "building": 55
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [ // 表示本模块被添加的原因
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "import()",
              "userRequest": "./a.js",
              "loc": "3:0-42" // 源代码被引入的位置 3行 42列
            }
          ],
          "providedExports": [
            "default"
          ],
          "optimizationBailout": [],
          "depth": 1, // 深度1
          "source": "export default a = 'aaaaaaaaaa'" // 源码
        }
      ],
      "filteredModules": 0,
      "origins": [
        {
          "moduleId": "./src/index.js",
          "module": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "moduleName": "./src/index.js",
          "loc": "3:0-42",
          "request": "./a.js",
          "reasons": []
        }
      ]
    },
    {
      "id": "main",
      "rendered": true,
      "initial": true,
      "entry": true,
      "size": 60242,
      "names": [
        "main"
      ],
      "files": [
        "main-262a9e.js"
      ],
      "hash": "46183562bba214530b95",
      "siblings": [],
      "parents": [],
      "children": [
        0
      ],
      "childrenByOrder": {},
      "modules": [
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "index": 8,
          "index2": 33,
          "size": 40,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            }
          ],
          "profile": {
            "factory": 549,
            "building": 55
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony side effect evaluation",
              "userRequest": "axios",
              "loc": "8:0-26"
            },
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony import specifier",
              "userRequest": "axios",
              "loc": "10:0-5"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 1,
          "source": "module.exports = require('./lib/axios');"
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "index": 21,
          "index2": 24,
          "size": 6031,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "issuerId": "./node_modules/axios/lib/defaults.js",
          "issuerName": "./node_modules/axios/lib/defaults.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/defaults.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "module": "./node_modules/axios/lib/defaults.js",
              "moduleName": "./node_modules/axios/lib/defaults.js",
              "type": "cjs require",
              "userRequest": "./adapters/xhr",
              "loc": "20:14-39"
            },
            {
              "moduleId": "./node_modules/axios/lib/defaults.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "module": "./node_modules/axios/lib/defaults.js",
              "moduleName": "./node_modules/axios/lib/defaults.js",
              "type": "cjs require",
              "userRequest": "./adapters/http",
              "loc": "23:14-40"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "'use strict';\n\nvar utils = require('./../utils');\nvar settle = require('./../core/settle');\nvar cookies = require('./../helpers/cookies');\nvar buildURL = require('./../helpers/buildURL');\nvar buildFullPath = require('../core/buildFullPath');\nvar parseHeaders = require('./../helpers/parseHeaders');\nvar isURLSameOrigin = require('./../helpers/isURLSameOrigin');\nvar createError = require('../core/createError');\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    if (\n      (utils.isBlob(requestData) || utils.isFile(requestData)) &&\n      requestData.type\n    ) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = unescape(encodeURIComponent(config.auth.password)) || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "index": 9,
          "index2": 32,
          "size": 1423,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "issuerId": "./node_modules/axios/index.js",
          "issuerName": "./node_modules/axios/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            }
          ],
          "profile": {
            "factory": 17,
            "building": 3
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "module": "./node_modules/axios/index.js",
              "moduleName": "./node_modules/axios/index.js",
              "type": "cjs require",
              "userRequest": "./lib/axios",
              "loc": "1:17-39"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 2,
          "source": "'use strict';\n\nvar utils = require('./utils');\nvar bind = require('./helpers/bind');\nvar Axios = require('./core/Axios');\nvar mergeConfig = require('./core/mergeConfig');\nvar defaults = require('./defaults');\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = require('./cancel/Cancel');\naxios.CancelToken = require('./cancel/CancelToken');\naxios.isCancel = require('./cancel/isCancel');\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = require('./helpers/spread');\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n"
        },
        {
          "id": "./node_modules/axios/lib/cancel/Cancel.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\Cancel.js",
          "name": "./node_modules/axios/lib/cancel/Cancel.js",
          "index": 32,
          "index2": 29,
          "size": 385,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./cancel/Cancel",
              "loc": "40:15-41"
            },
            {
              "moduleId": "./node_modules/axios/lib/cancel/CancelToken.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\CancelToken.js",
              "module": "./node_modules/axios/lib/cancel/CancelToken.js",
              "moduleName": "./node_modules/axios/lib/cancel/CancelToken.js",
              "type": "cjs require",
              "userRequest": "./Cancel",
              "loc": "3:13-32"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n"
        },
        {
          "id": "./node_modules/axios/lib/cancel/CancelToken.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\CancelToken.js",
          "name": "./node_modules/axios/lib/cancel/CancelToken.js",
          "index": 33,
          "index2": 30,
          "size": 1240,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./cancel/CancelToken",
              "loc": "41:20-51"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nvar Cancel = require('./Cancel');\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n"
        },
        {
          "id": "./node_modules/axios/lib/cancel/isCancel.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\isCancel.js",
          "name": "./node_modules/axios/lib/cancel/isCancel.js",
          "index": 17,
          "index2": 12,
          "size": 102,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./cancel/isCancel",
              "loc": "42:17-45"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
              "module": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
              "type": "cjs require",
              "userRequest": "../cancel/isCancel",
              "loc": "5:15-44"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/Axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "name": "./node_modules/axios/lib/core/Axios.js",
          "index": 12,
          "index2": 28,
          "size": 2615,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./core/Axios",
              "loc": "5:12-35"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nvar utils = require('./../utils');\nvar buildURL = require('../helpers/buildURL');\nvar InterceptorManager = require('./InterceptorManager');\nvar dispatchRequest = require('./dispatchRequest');\nvar mergeConfig = require('./mergeConfig');\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n"
        },
        {
          "id": "./node_modules/axios/lib/core/InterceptorManager.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\InterceptorManager.js",
          "name": "./node_modules/axios/lib/core/InterceptorManager.js",
          "index": 14,
          "index2": 10,
          "size": 1251,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "issuerId": "./node_modules/axios/lib/core/Axios.js",
          "issuerName": "./node_modules/axios/lib/core/Axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/core/Axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "name": "./node_modules/axios/lib/core/Axios.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 537,
            "building": 14,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/Axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "module": "./node_modules/axios/lib/core/Axios.js",
              "moduleName": "./node_modules/axios/lib/core/Axios.js",
              "type": "cjs require",
              "userRequest": "./InterceptorManager",
              "loc": "5:25-56"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n"
        },
        {
          "id": "./node_modules/axios/lib/core/buildFullPath.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "name": "./node_modules/axios/lib/core/buildFullPath.js",
          "index": 26,
          "index2": 21,
          "size": 695,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "../core/buildFullPath",
              "loc": "7:20-52"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar isAbsoluteURL = require('../helpers/isAbsoluteURL');\nvar combineURLs = require('../helpers/combineURLs');\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/createError.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
          "name": "./node_modules/axios/lib/core/createError.js",
          "index": 23,
          "index2": 16,
          "size": 625,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "../core/createError",
              "loc": "10:18-48"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/settle.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\settle.js",
              "module": "./node_modules/axios/lib/core/settle.js",
              "moduleName": "./node_modules/axios/lib/core/settle.js",
              "type": "cjs require",
              "userRequest": "./createError",
              "loc": "3:18-42"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar enhanceError = require('./enhanceError');\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/dispatchRequest.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "name": "./node_modules/axios/lib/core/dispatchRequest.js",
          "index": 15,
          "index2": 26,
          "size": 1934,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "issuerId": "./node_modules/axios/lib/core/Axios.js",
          "issuerName": "./node_modules/axios/lib/core/Axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/core/Axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "name": "./node_modules/axios/lib/core/Axios.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 537,
            "building": 14,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/Axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "module": "./node_modules/axios/lib/core/Axios.js",
              "moduleName": "./node_modules/axios/lib/core/Axios.js",
              "type": "cjs require",
              "userRequest": "./dispatchRequest",
              "loc": "6:22-50"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "'use strict';\n\nvar utils = require('./../utils');\nvar transformData = require('./transformData');\nvar isCancel = require('../cancel/isCancel');\nvar defaults = require('../defaults');\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/enhanceError.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\enhanceError.js",
          "name": "./node_modules/axios/lib/core/enhanceError.js",
          "index": 24,
          "index2": 15,
          "size": 1049,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
          "issuerId": "./node_modules/axios/lib/core/createError.js",
          "issuerName": "./node_modules/axios/lib/core/createError.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            },
            {
              "id": "./node_modules/axios/lib/core/createError.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
              "name": "./node_modules/axios/lib/core/createError.js",
              "profile": {
                "factory": 10,
                "building": 7,
                "dependencies": 1
              }
            }
          ],
          "profile": {
            "factory": 4,
            "building": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/createError.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
              "module": "./node_modules/axios/lib/core/createError.js",
              "moduleName": "./node_modules/axios/lib/core/createError.js",
              "type": "cjs require",
              "userRequest": "./enhanceError",
              "loc": "3:19-44"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 6,
          "source": "'use strict';\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/mergeConfig.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\mergeConfig.js",
          "name": "./node_modules/axios/lib/core/mergeConfig.js",
          "index": 31,
          "index2": 27,
          "size": 2895,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./core/mergeConfig",
              "loc": "6:18-47"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/Axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "module": "./node_modules/axios/lib/core/Axios.js",
              "moduleName": "./node_modules/axios/lib/core/Axios.js",
              "type": "cjs require",
              "userRequest": "./mergeConfig",
              "loc": "7:18-42"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nvar utils = require('../utils');\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/settle.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\settle.js",
          "name": "./node_modules/axios/lib/core/settle.js",
          "index": 22,
          "index2": 17,
          "size": 706,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../core/settle",
              "loc": "4:13-40"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar createError = require('./createError');\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/core/transformData.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\transformData.js",
          "name": "./node_modules/axios/lib/core/transformData.js",
          "index": 16,
          "index2": 11,
          "size": 550,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "issuerId": "./node_modules/axios/lib/core/dispatchRequest.js",
          "issuerName": "./node_modules/axios/lib/core/dispatchRequest.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/core/Axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "name": "./node_modules/axios/lib/core/Axios.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/core/dispatchRequest.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
              "name": "./node_modules/axios/lib/core/dispatchRequest.js",
              "profile": {
                "factory": 537,
                "building": 14,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 18,
            "building": 2,
            "dependencies": 0
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
              "module": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
              "type": "cjs require",
              "userRequest": "./transformData",
              "loc": "4:20-46"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "index": 18,
          "index2": 25,
          "size": 2563,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./defaults",
              "loc": "7:15-36"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
              "module": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
              "type": "cjs require",
              "userRequest": "../defaults",
              "loc": "6:15-37"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nvar utils = require('./utils');\nvar normalizeHeaderName = require('./helpers/normalizeHeaderName');\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = require('./adapters/xhr');\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = require('./adapters/http');\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/bind.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\bind.js",
          "name": "./node_modules/axios/lib/helpers/bind.js",
          "index": 11,
          "index2": 7,
          "size": 256,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./helpers/bind",
              "loc": "4:11-36"
            },
            {
              "moduleId": "./node_modules/axios/lib/utils.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\utils.js",
              "module": "./node_modules/axios/lib/utils.js",
              "moduleName": "./node_modules/axios/lib/utils.js",
              "type": "cjs require",
              "userRequest": "./helpers/bind",
              "loc": "3:11-36"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/buildURL.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\buildURL.js",
          "name": "./node_modules/axios/lib/helpers/buildURL.js",
          "index": 13,
          "index2": 9,
          "size": 1644,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "issuerId": "./node_modules/axios/lib/core/Axios.js",
          "issuerName": "./node_modules/axios/lib/core/Axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/core/Axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "name": "./node_modules/axios/lib/core/Axios.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 537,
            "building": 14,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../helpers/buildURL",
              "loc": "6:15-47"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/Axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "module": "./node_modules/axios/lib/core/Axios.js",
              "moduleName": "./node_modules/axios/lib/core/Axios.js",
              "type": "cjs require",
              "userRequest": "../helpers/buildURL",
              "loc": "4:15-45"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/combineURLs.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\combineURLs.js",
          "name": "./node_modules/axios/lib/helpers/combineURLs.js",
          "index": 28,
          "index2": 20,
          "size": 380,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "issuerId": "./node_modules/axios/lib/core/buildFullPath.js",
          "issuerName": "./node_modules/axios/lib/core/buildFullPath.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            },
            {
              "id": "./node_modules/axios/lib/core/buildFullPath.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
              "name": "./node_modules/axios/lib/core/buildFullPath.js",
              "profile": {
                "factory": 10,
                "building": 7,
                "dependencies": 1
              }
            }
          ],
          "profile": {
            "factory": 7,
            "building": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/buildFullPath.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
              "module": "./node_modules/axios/lib/core/buildFullPath.js",
              "moduleName": "./node_modules/axios/lib/core/buildFullPath.js",
              "type": "cjs require",
              "userRequest": "../helpers/combineURLs",
              "loc": "4:18-51"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 6,
          "source": "'use strict';\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/cookies.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\cookies.js",
          "name": "./node_modules/axios/lib/helpers/cookies.js",
          "index": 25,
          "index2": 18,
          "size": 1435,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../helpers/cookies",
              "loc": "5:14-45"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/isAbsoluteURL.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isAbsoluteURL.js",
          "name": "./node_modules/axios/lib/helpers/isAbsoluteURL.js",
          "index": 27,
          "index2": 19,
          "size": 563,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "issuerId": "./node_modules/axios/lib/core/buildFullPath.js",
          "issuerName": "./node_modules/axios/lib/core/buildFullPath.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            },
            {
              "id": "./node_modules/axios/lib/core/buildFullPath.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
              "name": "./node_modules/axios/lib/core/buildFullPath.js",
              "profile": {
                "factory": 10,
                "building": 7,
                "dependencies": 1
              }
            }
          ],
          "profile": {
            "factory": 7,
            "building": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/core/buildFullPath.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
              "module": "./node_modules/axios/lib/core/buildFullPath.js",
              "moduleName": "./node_modules/axios/lib/core/buildFullPath.js",
              "type": "cjs require",
              "userRequest": "../helpers/isAbsoluteURL",
              "loc": "3:20-55"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 6,
          "source": "'use strict';\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isURLSameOrigin.js",
          "name": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "index": 30,
          "index2": 23,
          "size": 2305,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../helpers/isURLSameOrigin",
              "loc": "9:22-61"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\normalizeHeaderName.js",
          "name": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "index": 20,
          "index2": 14,
          "size": 357,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "issuerId": "./node_modules/axios/lib/defaults.js",
          "issuerName": "./node_modules/axios/lib/defaults.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/defaults.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "module": "./node_modules/axios/lib/defaults.js",
              "moduleName": "./node_modules/axios/lib/defaults.js",
              "type": "cjs require",
              "userRequest": "./helpers/normalizeHeaderName",
              "loc": "4:26-66"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "'use strict';\n\nvar utils = require('../utils');\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/parseHeaders.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\parseHeaders.js",
          "name": "./node_modules/axios/lib/helpers/parseHeaders.js",
          "index": 29,
          "index2": 22,
          "size": 1393,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            },
            {
              "id": "./node_modules/axios/lib/adapters/xhr.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "name": "./node_modules/axios/lib/adapters/xhr.js",
              "profile": {
                "factory": 543,
                "building": 16,
                "dependencies": 2
              }
            }
          ],
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../helpers/parseHeaders",
              "loc": "8:19-55"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 5,
          "source": "'use strict';\n\nvar utils = require('./../utils');\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/helpers/spread.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\spread.js",
          "name": "./node_modules/axios/lib/helpers/spread.js",
          "index": 34,
          "index2": 31,
          "size": 564,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./helpers/spread",
              "loc": "48:15-42"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n"
        },
        {
          "id": "./node_modules/axios/lib/utils.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\utils.js",
          "name": "./node_modules/axios/lib/utils.js",
          "index": 10,
          "index2": 8,
          "size": 8947,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "issuerId": "./node_modules/axios/lib/axios.js",
          "issuerName": "./node_modules/axios/lib/axios.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            }
          ],
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
              "module": "./node_modules/axios/lib/adapters/xhr.js",
              "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "module": "./node_modules/axios/lib/axios.js",
              "moduleName": "./node_modules/axios/lib/axios.js",
              "type": "cjs require",
              "userRequest": "./utils",
              "loc": "3:12-30"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/Axios.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
              "module": "./node_modules/axios/lib/core/Axios.js",
              "moduleName": "./node_modules/axios/lib/core/Axios.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/InterceptorManager.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\InterceptorManager.js",
              "module": "./node_modules/axios/lib/core/InterceptorManager.js",
              "moduleName": "./node_modules/axios/lib/core/InterceptorManager.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
              "module": "./node_modules/axios/lib/core/dispatchRequest.js",
              "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/mergeConfig.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\mergeConfig.js",
              "module": "./node_modules/axios/lib/core/mergeConfig.js",
              "moduleName": "./node_modules/axios/lib/core/mergeConfig.js",
              "type": "cjs require",
              "userRequest": "../utils",
              "loc": "3:12-31"
            },
            {
              "moduleId": "./node_modules/axios/lib/core/transformData.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\transformData.js",
              "module": "./node_modules/axios/lib/core/transformData.js",
              "moduleName": "./node_modules/axios/lib/core/transformData.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/defaults.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "module": "./node_modules/axios/lib/defaults.js",
              "moduleName": "./node_modules/axios/lib/defaults.js",
              "type": "cjs require",
              "userRequest": "./utils",
              "loc": "3:12-30"
            },
            {
              "moduleId": "./node_modules/axios/lib/helpers/buildURL.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\buildURL.js",
              "module": "./node_modules/axios/lib/helpers/buildURL.js",
              "moduleName": "./node_modules/axios/lib/helpers/buildURL.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/helpers/cookies.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\cookies.js",
              "module": "./node_modules/axios/lib/helpers/cookies.js",
              "moduleName": "./node_modules/axios/lib/helpers/cookies.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isURLSameOrigin.js",
              "module": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
              "moduleName": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            },
            {
              "moduleId": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\normalizeHeaderName.js",
              "module": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
              "moduleName": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
              "type": "cjs require",
              "userRequest": "../utils",
              "loc": "3:12-31"
            },
            {
              "moduleId": "./node_modules/axios/lib/helpers/parseHeaders.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\parseHeaders.js",
              "module": "./node_modules/axios/lib/helpers/parseHeaders.js",
              "moduleName": "./node_modules/axios/lib/helpers/parseHeaders.js",
              "type": "cjs require",
              "userRequest": "./../utils",
              "loc": "3:12-33"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "'use strict';\n\nvar bind = require('./helpers/bind');\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n"
        },
        {
          "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "index": 3,
          "index2": 4,
          "size": 1419,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "issuerId": "./src/style/index.less",
          "issuerName": "./src/style/index.less",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./src/style/index.less",
              "profile": {
                "factory": 549,
                "building": 55
              }
            }
          ],
          "profile": {
            "factory": 517,
            "building": 1123
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./src/style/index.less",
              "moduleName": "./src/style/index.less",
              "type": "cjs require",
              "userRequest": "!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less",
              "loc": "2:26-182"
            }
          ],
          "providedExports": [
            "default"
          ],
          "optimizationBailout": [],
          "depth": 2,
          "source": "// Imports\nimport ___CSS_LOADER_API_IMPORT___ from \"../../node_modules/css-loader/dist/runtime/api.js\";\nimport ___CSS_LOADER_GET_URL_IMPORT___ from \"../../node_modules/css-loader/dist/runtime/getUrl.js\";\nimport ___CSS_LOADER_URL_IMPORT_0___ from \"../webfont.woff2\";\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"webfont\\\";\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\n}\\nhtml body {\\n  font-family: \\\"webfont\\\" !important;\\n}\\nhtml body div {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  border: 1px red solid;\\n  background: blue;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/style/index.less\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;EACA,kBAAA;EACA,4DAAA;AACF;AAEA;EAEI,iCAAA;AADJ;AADA;EAIM,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,qBAAA;EACA,gBAAA;AAAN\",\"sourcesContent\":[\"@font-face {\\n  font-family: \\\"webfont\\\";\\n  font-display: swap;\\n  src: url(\\\"../webfont.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\nhtml {\\n  body {\\n    font-family: \\\"webfont\\\" !important;\\n    div {\\n      display: flex;\\n      border: 1px red solid;\\n      background: blue;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\nexport default ___CSS_LOADER_EXPORT___;\n"
        },
        {
          "id": "./node_modules/css-loader/dist/runtime/api.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\runtime\\api.js",
          "name": "./node_modules/css-loader/dist/runtime/api.js",
          "index": 4,
          "index2": 1,
          "size": 2517,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./src/style/index.less",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "profile": {
                "factory": 517,
                "building": 1123
              }
            }
          ],
          "profile": {
            "factory": 27,
            "building": 5
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony side effect evaluation",
              "userRequest": "../../node_modules/css-loader/dist/runtime/api.js",
              "loc": "2:0-92"
            },
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony import specifier",
              "userRequest": "../../node_modules/css-loader/dist/runtime/api.js",
              "loc": "5:30-57"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "\"use strict\";\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}"
        },
        {
          "id": "./node_modules/css-loader/dist/runtime/getUrl.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\runtime\\getUrl.js",
          "name": "./node_modules/css-loader/dist/runtime/getUrl.js",
          "index": 5,
          "index2": 2,
          "size": 830,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./src/style/index.less",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "profile": {
                "factory": 517,
                "building": 1123
              }
            }
          ],
          "profile": {
            "factory": 27,
            "building": 5
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony side effect evaluation",
              "userRequest": "../../node_modules/css-loader/dist/runtime/getUrl.js",
              "loc": "3:0-99"
            },
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony import specifier",
              "userRequest": "../../node_modules/css-loader/dist/runtime/getUrl.js",
              "loc": "6:41-72"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 3,
          "source": "\"use strict\";\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};"
        },
        {
          "id": "./node_modules/process/browser.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\process\\browser.js",
          "name": "./node_modules/process/browser.js",
          "index": 19,
          "index2": 13,
          "size": 5418,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "issuerId": "./node_modules/axios/lib/defaults.js",
          "issuerName": "./node_modules/axios/lib/defaults.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./node_modules/axios/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
              "name": "./node_modules/axios/index.js",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/axios/lib/axios.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
              "name": "./node_modules/axios/lib/axios.js",
              "profile": {
                "factory": 17,
                "building": 3
              }
            },
            {
              "id": "./node_modules/axios/lib/defaults.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "name": "./node_modules/axios/lib/defaults.js",
              "profile": {
                "factory": 32,
                "building": 26,
                "dependencies": 543
              }
            }
          ],
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./node_modules/axios/lib/defaults.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
              "module": "./node_modules/axios/lib/defaults.js",
              "moduleName": "./node_modules/axios/lib/defaults.js",
              "type": "cjs require",
              "userRequest": "process",
              "loc": "1:0-37"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 4,
          "source": "// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n"
        },
        {
          "id": "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\runtime\\injectStylesIntoStyleTag.js",
          "name": "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          "index": 2,
          "index2": 0,
          "size": 6827,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "issuerId": "./src/style/index.less",
          "issuerName": "./src/style/index.less",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./src/style/index.less",
              "profile": {
                "factory": 549,
                "building": 55
              }
            }
          ],
          "profile": {
            "factory": 517,
            "building": 1123
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./src/style/index.less",
              "moduleName": "./src/style/index.less",
              "type": "cjs require",
              "userRequest": "!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
              "loc": "1:10-94"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 2,
          "source": "\"use strict\";\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce = typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};"
        },
        {
          "id": "./src/images/logo.png",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\url-loader\\dist\\cjs.js??ref--6!D:\\webpack-sourcecode\\webpack-project\\src\\images\\logo.png",
          "name": "./src/images/logo.png",
          "index": 7,
          "index2": 6,
          "size": 59,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            }
          ],
          "profile": {
            "factory": 549,
            "building": 55
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [
            "images/logo.png"
          ],
          "reasons": [
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony side effect evaluation",
              "userRequest": "./images/logo.png",
              "loc": "2:0-36"
            }
          ],
          "providedExports": [
            "default"
          ],
          "optimizationBailout": [],
          "depth": 1,
          "source": "export default __webpack_public_path__ + \"images/logo.png\";"
        },
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "index": 0,
          "index2": 34,
          "size": 527,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": null,
          "issuerId": null,
          "issuerName": null,
          "issuerPath": null,
          "profile": {
            "factory": 26,
            "building": 17
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": null,
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "type": "single entry",
              "userRequest": "./src/index.js",
              "loc": "main"
            }
          ],
          "providedExports": [],
          "optimizationBailout": [],
          "depth": 0,
          "source": "import css from \"./style/index.less\";\nimport pic from \"./images/logo.png\";\nimport(/**webpackChunkname pic */'./a.js').then(result=>{\n  console.log(result.default)\n})\nconsole.log(\"hello !!!!\");\n\nimport axios from \"axios\";\n\naxios.get(\"/api/info\").then((res) => {\n  console.log(res);\n});\n// let img = new Image();\n// console.log(pic);\n// img.src = pic;\n// let root = document.querySelector(\"#app\");\n// root.append(img);\n\n// 图片 file-loader url-loader\n// 第三方字体\n// 本地开发服务 最主要目的 提升开发体验\n"
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "index": 1,
          "index2": 5,
          "size": 615,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "issuerId": "./src/index.js",
          "issuerName": "./src/index.js",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            }
          ],
          "profile": {
            "factory": 549,
            "building": 55
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": "./src/index.js",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "module": "./src/index.js",
              "moduleName": "./src/index.js",
              "type": "harmony side effect evaluation",
              "userRequest": "./style/index.less",
              "loc": "1:0-37"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 1,
          "source": "var api = require(\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = require(\"!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};"
        },
        {
          "id": "./src/webfont.woff2",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\file-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\webfont.woff2",
          "name": "./src/webfont.woff2",
          "index": 6,
          "index2": 3,
          "size": 82,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "main"
          ],
          "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "issuerPath": [
            {
              "id": "./src/index.js",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
              "name": "./src/index.js",
              "profile": {
                "factory": 26,
                "building": 17
              }
            },
            {
              "id": "./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./src/style/index.less",
              "profile": {
                "factory": 549,
                "building": 55
              }
            },
            {
              "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "profile": {
                "factory": 517,
                "building": 1123
              }
            }
          ],
          "profile": {
            "factory": 27,
            "building": 5
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [
            "3ba1db5cc0555c3eca0e64dc7e1db543.woff2"
          ],
          "reasons": [
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony side effect evaluation",
              "userRequest": "../webfont.woff2",
              "loc": "4:0-61"
            },
            {
              "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
              "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
              "type": "harmony import specifier",
              "userRequest": "../webfont.woff2",
              "loc": "6:73-102"
            }
          ],
          "providedExports": [
            "default"
          ],
          "optimizationBailout": [],
          "depth": 3,
          "source": "export default __webpack_public_path__ + \"3ba1db5cc0555c3eca0e64dc7e1db543.woff2\";"
        }
      ],
      "filteredModules": 0,
      "origins": [
        {
          "module": "",
          "moduleIdentifier": "",
          "moduleName": "",
          "loc": "main",
          "request": "./src/index.js",
          "reasons": []
        }
      ]
    }
  ],
  "modules": [
    {
      "id": "./node_modules/axios/index.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
      "name": "./node_modules/axios/index.js",
      "index": 8,
      "index2": 33,
      "size": 40,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        }
      ],
      "profile": {
        "factory": 549,
        "building": 55
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony side effect evaluation",
          "userRequest": "axios",
          "loc": "8:0-26"
        },
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony import specifier",
          "userRequest": "axios",
          "loc": "10:0-5"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 1,
      "source": "module.exports = require('./lib/axios');"
    },
    {
      "id": "./node_modules/axios/lib/adapters/xhr.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "name": "./node_modules/axios/lib/adapters/xhr.js",
      "index": 21,
      "index2": 24,
      "size": 6031,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
      "issuerId": "./node_modules/axios/lib/defaults.js",
      "issuerName": "./node_modules/axios/lib/defaults.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 543,
        "building": 16,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/defaults.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "module": "./node_modules/axios/lib/defaults.js",
          "moduleName": "./node_modules/axios/lib/defaults.js",
          "type": "cjs require",
          "userRequest": "./adapters/xhr",
          "loc": "20:14-39"
        },
        {
          "moduleId": "./node_modules/axios/lib/defaults.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "module": "./node_modules/axios/lib/defaults.js",
          "moduleName": "./node_modules/axios/lib/defaults.js",
          "type": "cjs require",
          "userRequest": "./adapters/http",
          "loc": "23:14-40"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "'use strict';\n\nvar utils = require('./../utils');\nvar settle = require('./../core/settle');\nvar cookies = require('./../helpers/cookies');\nvar buildURL = require('./../helpers/buildURL');\nvar buildFullPath = require('../core/buildFullPath');\nvar parseHeaders = require('./../helpers/parseHeaders');\nvar isURLSameOrigin = require('./../helpers/isURLSameOrigin');\nvar createError = require('../core/createError');\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    if (\n      (utils.isBlob(requestData) || utils.isFile(requestData)) &&\n      requestData.type\n    ) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = unescape(encodeURIComponent(config.auth.password)) || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    var fullPath = buildFullPath(config.baseURL, config.url);\n    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request.onreadystatechange = function handleLoad() {\n      if (!request || request.readyState !== 4) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        status: request.status,\n        statusText: request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle browser request cancellation (as opposed to a manual cancellation)\n    request.onabort = function handleAbort() {\n      if (!request) {\n        return;\n      }\n\n      reject(createError('Request aborted', config, 'ECONNABORTED', request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';\n      if (config.timeoutErrorMessage) {\n        timeoutErrorMessage = config.timeoutErrorMessage;\n      }\n      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?\n        cookies.read(config.xsrfCookieName) :\n        undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (!utils.isUndefined(config.withCredentials)) {\n      request.withCredentials = !!config.withCredentials;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (!requestData) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/axios.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "name": "./node_modules/axios/lib/axios.js",
      "index": 9,
      "index2": 32,
      "size": 1423,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
      "issuerId": "./node_modules/axios/index.js",
      "issuerName": "./node_modules/axios/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        }
      ],
      "profile": {
        "factory": 17,
        "building": 3
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "module": "./node_modules/axios/index.js",
          "moduleName": "./node_modules/axios/index.js",
          "type": "cjs require",
          "userRequest": "./lib/axios",
          "loc": "1:17-39"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 2,
      "source": "'use strict';\n\nvar utils = require('./utils');\nvar bind = require('./helpers/bind');\nvar Axios = require('./core/Axios');\nvar mergeConfig = require('./core/mergeConfig');\nvar defaults = require('./defaults');\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(mergeConfig(axios.defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = require('./cancel/Cancel');\naxios.CancelToken = require('./cancel/CancelToken');\naxios.isCancel = require('./cancel/isCancel');\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = require('./helpers/spread');\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n"
    },
    {
      "id": "./node_modules/axios/lib/cancel/Cancel.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\Cancel.js",
      "name": "./node_modules/axios/lib/cancel/Cancel.js",
      "index": 32,
      "index2": 29,
      "size": 385,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./cancel/Cancel",
          "loc": "40:15-41"
        },
        {
          "moduleId": "./node_modules/axios/lib/cancel/CancelToken.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\CancelToken.js",
          "module": "./node_modules/axios/lib/cancel/CancelToken.js",
          "moduleName": "./node_modules/axios/lib/cancel/CancelToken.js",
          "type": "cjs require",
          "userRequest": "./Cancel",
          "loc": "3:13-32"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n"
    },
    {
      "id": "./node_modules/axios/lib/cancel/CancelToken.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\CancelToken.js",
      "name": "./node_modules/axios/lib/cancel/CancelToken.js",
      "index": 33,
      "index2": 30,
      "size": 1240,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./cancel/CancelToken",
          "loc": "41:20-51"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nvar Cancel = require('./Cancel');\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n"
    },
    {
      "id": "./node_modules/axios/lib/cancel/isCancel.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\cancel\\isCancel.js",
      "name": "./node_modules/axios/lib/cancel/isCancel.js",
      "index": 17,
      "index2": 12,
      "size": 102,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./cancel/isCancel",
          "loc": "42:17-45"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "module": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
          "type": "cjs require",
          "userRequest": "../cancel/isCancel",
          "loc": "5:15-44"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/Axios.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
      "name": "./node_modules/axios/lib/core/Axios.js",
      "index": 12,
      "index2": 28,
      "size": 2615,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./core/Axios",
          "loc": "5:12-35"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nvar utils = require('./../utils');\nvar buildURL = require('../helpers/buildURL');\nvar InterceptorManager = require('./InterceptorManager');\nvar dispatchRequest = require('./dispatchRequest');\nvar mergeConfig = require('./mergeConfig');\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = arguments[1] || {};\n    config.url = arguments[0];\n  } else {\n    config = config || {};\n  }\n\n  config = mergeConfig(this.defaults, config);\n\n  // Set config.method\n  if (config.method) {\n    config.method = config.method.toLowerCase();\n  } else if (this.defaults.method) {\n    config.method = this.defaults.method.toLowerCase();\n  } else {\n    config.method = 'get';\n  }\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\nAxios.prototype.getUri = function getUri(config) {\n  config = mergeConfig(this.defaults, config);\n  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\\?/, '');\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(mergeConfig(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n"
    },
    {
      "id": "./node_modules/axios/lib/core/InterceptorManager.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\InterceptorManager.js",
      "name": "./node_modules/axios/lib/core/InterceptorManager.js",
      "index": 14,
      "index2": 10,
      "size": 1251,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
      "issuerId": "./node_modules/axios/lib/core/Axios.js",
      "issuerName": "./node_modules/axios/lib/core/Axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/core/Axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "name": "./node_modules/axios/lib/core/Axios.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 537,
        "building": 14,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/Axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "module": "./node_modules/axios/lib/core/Axios.js",
          "moduleName": "./node_modules/axios/lib/core/Axios.js",
          "type": "cjs require",
          "userRequest": "./InterceptorManager",
          "loc": "5:25-56"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n"
    },
    {
      "id": "./node_modules/axios/lib/core/buildFullPath.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
      "name": "./node_modules/axios/lib/core/buildFullPath.js",
      "index": 26,
      "index2": 21,
      "size": 695,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "../core/buildFullPath",
          "loc": "7:20-52"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar isAbsoluteURL = require('../helpers/isAbsoluteURL');\nvar combineURLs = require('../helpers/combineURLs');\n\n/**\n * Creates a new URL by combining the baseURL with the requestedURL,\n * only when the requestedURL is not already an absolute URL.\n * If the requestURL is absolute, this function returns the requestedURL untouched.\n *\n * @param {string} baseURL The base URL\n * @param {string} requestedURL Absolute or relative URL to combine\n * @returns {string} The combined full path\n */\nmodule.exports = function buildFullPath(baseURL, requestedURL) {\n  if (baseURL && !isAbsoluteURL(requestedURL)) {\n    return combineURLs(baseURL, requestedURL);\n  }\n  return requestedURL;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/createError.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
      "name": "./node_modules/axios/lib/core/createError.js",
      "index": 23,
      "index2": 16,
      "size": 625,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "../core/createError",
          "loc": "10:18-48"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/settle.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\settle.js",
          "module": "./node_modules/axios/lib/core/settle.js",
          "moduleName": "./node_modules/axios/lib/core/settle.js",
          "type": "cjs require",
          "userRequest": "./createError",
          "loc": "3:18-42"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar enhanceError = require('./enhanceError');\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/dispatchRequest.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
      "name": "./node_modules/axios/lib/core/dispatchRequest.js",
      "index": 15,
      "index2": 26,
      "size": 1934,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
      "issuerId": "./node_modules/axios/lib/core/Axios.js",
      "issuerName": "./node_modules/axios/lib/core/Axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/core/Axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "name": "./node_modules/axios/lib/core/Axios.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 537,
        "building": 14,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/Axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "module": "./node_modules/axios/lib/core/Axios.js",
          "moduleName": "./node_modules/axios/lib/core/Axios.js",
          "type": "cjs require",
          "userRequest": "./dispatchRequest",
          "loc": "6:22-50"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "'use strict';\n\nvar utils = require('./../utils');\nvar transformData = require('./transformData');\nvar isCancel = require('../cancel/isCancel');\nvar defaults = require('../defaults');\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/enhanceError.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\enhanceError.js",
      "name": "./node_modules/axios/lib/core/enhanceError.js",
      "index": 24,
      "index2": 15,
      "size": 1049,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
      "issuerId": "./node_modules/axios/lib/core/createError.js",
      "issuerName": "./node_modules/axios/lib/core/createError.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        },
        {
          "id": "./node_modules/axios/lib/core/createError.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
          "name": "./node_modules/axios/lib/core/createError.js",
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          }
        }
      ],
      "profile": {
        "factory": 4,
        "building": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/createError.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\createError.js",
          "module": "./node_modules/axios/lib/core/createError.js",
          "moduleName": "./node_modules/axios/lib/core/createError.js",
          "type": "cjs require",
          "userRequest": "./enhanceError",
          "loc": "3:19-44"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 6,
      "source": "'use strict';\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n\n  error.request = request;\n  error.response = response;\n  error.isAxiosError = true;\n\n  error.toJSON = function toJSON() {\n    return {\n      // Standard\n      message: this.message,\n      name: this.name,\n      // Microsoft\n      description: this.description,\n      number: this.number,\n      // Mozilla\n      fileName: this.fileName,\n      lineNumber: this.lineNumber,\n      columnNumber: this.columnNumber,\n      stack: this.stack,\n      // Axios\n      config: this.config,\n      code: this.code\n    };\n  };\n  return error;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/mergeConfig.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\mergeConfig.js",
      "name": "./node_modules/axios/lib/core/mergeConfig.js",
      "index": 31,
      "index2": 27,
      "size": 2895,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./core/mergeConfig",
          "loc": "6:18-47"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/Axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "module": "./node_modules/axios/lib/core/Axios.js",
          "moduleName": "./node_modules/axios/lib/core/Axios.js",
          "type": "cjs require",
          "userRequest": "./mergeConfig",
          "loc": "7:18-42"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nvar utils = require('../utils');\n\n/**\n * Config-specific merge-function which creates a new config-object\n * by merging two configuration objects together.\n *\n * @param {Object} config1\n * @param {Object} config2\n * @returns {Object} New object resulting from merging config2 to config1\n */\nmodule.exports = function mergeConfig(config1, config2) {\n  // eslint-disable-next-line no-param-reassign\n  config2 = config2 || {};\n  var config = {};\n\n  var valueFromConfig2Keys = ['url', 'method', 'data'];\n  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];\n  var defaultToConfig2Keys = [\n    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',\n    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',\n    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',\n    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',\n    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'\n  ];\n  var directMergeKeys = ['validateStatus'];\n\n  function getMergedValue(target, source) {\n    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {\n      return utils.merge(target, source);\n    } else if (utils.isPlainObject(source)) {\n      return utils.merge({}, source);\n    } else if (utils.isArray(source)) {\n      return source.slice();\n    }\n    return source;\n  }\n\n  function mergeDeepProperties(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  }\n\n  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    }\n  });\n\n  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);\n\n  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {\n    if (!utils.isUndefined(config2[prop])) {\n      config[prop] = getMergedValue(undefined, config2[prop]);\n    } else if (!utils.isUndefined(config1[prop])) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  utils.forEach(directMergeKeys, function merge(prop) {\n    if (prop in config2) {\n      config[prop] = getMergedValue(config1[prop], config2[prop]);\n    } else if (prop in config1) {\n      config[prop] = getMergedValue(undefined, config1[prop]);\n    }\n  });\n\n  var axiosKeys = valueFromConfig2Keys\n    .concat(mergeDeepPropertiesKeys)\n    .concat(defaultToConfig2Keys)\n    .concat(directMergeKeys);\n\n  var otherKeys = Object\n    .keys(config1)\n    .concat(Object.keys(config2))\n    .filter(function filterAxiosKeys(key) {\n      return axiosKeys.indexOf(key) === -1;\n    });\n\n  utils.forEach(otherKeys, mergeDeepProperties);\n\n  return config;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/settle.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\settle.js",
      "name": "./node_modules/axios/lib/core/settle.js",
      "index": 22,
      "index2": 17,
      "size": 706,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../core/settle",
          "loc": "4:13-40"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar createError = require('./createError');\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/core/transformData.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\transformData.js",
      "name": "./node_modules/axios/lib/core/transformData.js",
      "index": 16,
      "index2": 11,
      "size": 550,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
      "issuerId": "./node_modules/axios/lib/core/dispatchRequest.js",
      "issuerName": "./node_modules/axios/lib/core/dispatchRequest.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/core/Axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "name": "./node_modules/axios/lib/core/Axios.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/core/dispatchRequest.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "name": "./node_modules/axios/lib/core/dispatchRequest.js",
          "profile": {
            "factory": 537,
            "building": 14,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 18,
        "building": 2,
        "dependencies": 0
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "module": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
          "type": "cjs require",
          "userRequest": "./transformData",
          "loc": "4:20-46"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/defaults.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
      "name": "./node_modules/axios/lib/defaults.js",
      "index": 18,
      "index2": 25,
      "size": 2563,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./defaults",
          "loc": "7:15-36"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "module": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
          "type": "cjs require",
          "userRequest": "../defaults",
          "loc": "6:15-37"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nvar utils = require('./utils');\nvar normalizeHeaderName = require('./helpers/normalizeHeaderName');\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = require('./adapters/xhr');\n  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {\n    // For node use HTTP adapter\n    adapter = require('./adapters/http');\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Accept');\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n  maxBodyLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/bind.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\bind.js",
      "name": "./node_modules/axios/lib/helpers/bind.js",
      "index": 11,
      "index2": 7,
      "size": 256,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./helpers/bind",
          "loc": "4:11-36"
        },
        {
          "moduleId": "./node_modules/axios/lib/utils.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\utils.js",
          "module": "./node_modules/axios/lib/utils.js",
          "moduleName": "./node_modules/axios/lib/utils.js",
          "type": "cjs require",
          "userRequest": "./helpers/bind",
          "loc": "3:11-36"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/buildURL.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\buildURL.js",
      "name": "./node_modules/axios/lib/helpers/buildURL.js",
      "index": 13,
      "index2": 9,
      "size": 1644,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
      "issuerId": "./node_modules/axios/lib/core/Axios.js",
      "issuerName": "./node_modules/axios/lib/core/Axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/core/Axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "name": "./node_modules/axios/lib/core/Axios.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 537,
        "building": 14,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../helpers/buildURL",
          "loc": "6:15-47"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/Axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "module": "./node_modules/axios/lib/core/Axios.js",
          "moduleName": "./node_modules/axios/lib/core/Axios.js",
          "type": "cjs require",
          "userRequest": "../helpers/buildURL",
          "loc": "4:15-45"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    var hashmarkIndex = url.indexOf('#');\n    if (hashmarkIndex !== -1) {\n      url = url.slice(0, hashmarkIndex);\n    }\n\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/combineURLs.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\combineURLs.js",
      "name": "./node_modules/axios/lib/helpers/combineURLs.js",
      "index": 28,
      "index2": 20,
      "size": 380,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
      "issuerId": "./node_modules/axios/lib/core/buildFullPath.js",
      "issuerName": "./node_modules/axios/lib/core/buildFullPath.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        },
        {
          "id": "./node_modules/axios/lib/core/buildFullPath.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "name": "./node_modules/axios/lib/core/buildFullPath.js",
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          }
        }
      ],
      "profile": {
        "factory": 7,
        "building": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/buildFullPath.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "module": "./node_modules/axios/lib/core/buildFullPath.js",
          "moduleName": "./node_modules/axios/lib/core/buildFullPath.js",
          "type": "cjs require",
          "userRequest": "../helpers/combineURLs",
          "loc": "4:18-51"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 6,
      "source": "'use strict';\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/cookies.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\cookies.js",
      "name": "./node_modules/axios/lib/helpers/cookies.js",
      "index": 25,
      "index2": 18,
      "size": 1435,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../helpers/cookies",
          "loc": "5:14-45"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n    (function standardBrowserEnv() {\n      return {\n        write: function write(name, value, expires, path, domain, secure) {\n          var cookie = [];\n          cookie.push(name + '=' + encodeURIComponent(value));\n\n          if (utils.isNumber(expires)) {\n            cookie.push('expires=' + new Date(expires).toGMTString());\n          }\n\n          if (utils.isString(path)) {\n            cookie.push('path=' + path);\n          }\n\n          if (utils.isString(domain)) {\n            cookie.push('domain=' + domain);\n          }\n\n          if (secure === true) {\n            cookie.push('secure');\n          }\n\n          document.cookie = cookie.join('; ');\n        },\n\n        read: function read(name) {\n          var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n          return (match ? decodeURIComponent(match[3]) : null);\n        },\n\n        remove: function remove(name) {\n          this.write(name, '', Date.now() - 86400000);\n        }\n      };\n    })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return {\n        write: function write() {},\n        read: function read() { return null; },\n        remove: function remove() {}\n      };\n    })()\n);\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/isAbsoluteURL.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isAbsoluteURL.js",
      "name": "./node_modules/axios/lib/helpers/isAbsoluteURL.js",
      "index": 27,
      "index2": 19,
      "size": 563,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
      "issuerId": "./node_modules/axios/lib/core/buildFullPath.js",
      "issuerName": "./node_modules/axios/lib/core/buildFullPath.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        },
        {
          "id": "./node_modules/axios/lib/core/buildFullPath.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "name": "./node_modules/axios/lib/core/buildFullPath.js",
          "profile": {
            "factory": 10,
            "building": 7,
            "dependencies": 1
          }
        }
      ],
      "profile": {
        "factory": 7,
        "building": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/core/buildFullPath.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\buildFullPath.js",
          "module": "./node_modules/axios/lib/core/buildFullPath.js",
          "moduleName": "./node_modules/axios/lib/core/buildFullPath.js",
          "type": "cjs require",
          "userRequest": "../helpers/isAbsoluteURL",
          "loc": "3:20-55"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 6,
      "source": "'use strict';\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isURLSameOrigin.js",
      "name": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
      "index": 30,
      "index2": 23,
      "size": 2305,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../helpers/isURLSameOrigin",
          "loc": "9:22-61"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n    (function standardBrowserEnv() {\n      var msie = /(msie|trident)/i.test(navigator.userAgent);\n      var urlParsingNode = document.createElement('a');\n      var originURL;\n\n      /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n      function resolveURL(url) {\n        var href = url;\n\n        if (msie) {\n        // IE needs attribute set twice to normalize properties\n          urlParsingNode.setAttribute('href', href);\n          href = urlParsingNode.href;\n        }\n\n        urlParsingNode.setAttribute('href', href);\n\n        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n        return {\n          href: urlParsingNode.href,\n          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n          host: urlParsingNode.host,\n          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n          hostname: urlParsingNode.hostname,\n          port: urlParsingNode.port,\n          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n            urlParsingNode.pathname :\n            '/' + urlParsingNode.pathname\n        };\n      }\n\n      originURL = resolveURL(window.location.href);\n\n      /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n      return function isURLSameOrigin(requestURL) {\n        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n        return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n      };\n    })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n    (function nonStandardBrowserEnv() {\n      return function isURLSameOrigin() {\n        return true;\n      };\n    })()\n);\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\normalizeHeaderName.js",
      "name": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
      "index": 20,
      "index2": 14,
      "size": 357,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
      "issuerId": "./node_modules/axios/lib/defaults.js",
      "issuerName": "./node_modules/axios/lib/defaults.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 543,
        "building": 16,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/defaults.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "module": "./node_modules/axios/lib/defaults.js",
          "moduleName": "./node_modules/axios/lib/defaults.js",
          "type": "cjs require",
          "userRequest": "./helpers/normalizeHeaderName",
          "loc": "4:26-66"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "'use strict';\n\nvar utils = require('../utils');\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/parseHeaders.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\parseHeaders.js",
      "name": "./node_modules/axios/lib/helpers/parseHeaders.js",
      "index": 29,
      "index2": 22,
      "size": 1393,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
      "issuerId": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerName": "./node_modules/axios/lib/adapters/xhr.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        },
        {
          "id": "./node_modules/axios/lib/adapters/xhr.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "name": "./node_modules/axios/lib/adapters/xhr.js",
          "profile": {
            "factory": 543,
            "building": 16,
            "dependencies": 2
          }
        }
      ],
      "profile": {
        "factory": 10,
        "building": 7,
        "dependencies": 1
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../helpers/parseHeaders",
          "loc": "8:19-55"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 5,
      "source": "'use strict';\n\nvar utils = require('./../utils');\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/helpers/spread.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\spread.js",
      "name": "./node_modules/axios/lib/helpers/spread.js",
      "index": 34,
      "index2": 31,
      "size": 564,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./helpers/spread",
          "loc": "48:15-42"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n"
    },
    {
      "id": "./node_modules/axios/lib/utils.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\utils.js",
      "name": "./node_modules/axios/lib/utils.js",
      "index": 10,
      "index2": 8,
      "size": 8947,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
      "issuerId": "./node_modules/axios/lib/axios.js",
      "issuerName": "./node_modules/axios/lib/axios.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        }
      ],
      "profile": {
        "factory": 32,
        "building": 26,
        "dependencies": 543
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\adapters\\xhr.js",
          "module": "./node_modules/axios/lib/adapters/xhr.js",
          "moduleName": "./node_modules/axios/lib/adapters/xhr.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "module": "./node_modules/axios/lib/axios.js",
          "moduleName": "./node_modules/axios/lib/axios.js",
          "type": "cjs require",
          "userRequest": "./utils",
          "loc": "3:12-30"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/Axios.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\Axios.js",
          "module": "./node_modules/axios/lib/core/Axios.js",
          "moduleName": "./node_modules/axios/lib/core/Axios.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/InterceptorManager.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\InterceptorManager.js",
          "module": "./node_modules/axios/lib/core/InterceptorManager.js",
          "moduleName": "./node_modules/axios/lib/core/InterceptorManager.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\dispatchRequest.js",
          "module": "./node_modules/axios/lib/core/dispatchRequest.js",
          "moduleName": "./node_modules/axios/lib/core/dispatchRequest.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/mergeConfig.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\mergeConfig.js",
          "module": "./node_modules/axios/lib/core/mergeConfig.js",
          "moduleName": "./node_modules/axios/lib/core/mergeConfig.js",
          "type": "cjs require",
          "userRequest": "../utils",
          "loc": "3:12-31"
        },
        {
          "moduleId": "./node_modules/axios/lib/core/transformData.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\core\\transformData.js",
          "module": "./node_modules/axios/lib/core/transformData.js",
          "moduleName": "./node_modules/axios/lib/core/transformData.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/defaults.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "module": "./node_modules/axios/lib/defaults.js",
          "moduleName": "./node_modules/axios/lib/defaults.js",
          "type": "cjs require",
          "userRequest": "./utils",
          "loc": "3:12-30"
        },
        {
          "moduleId": "./node_modules/axios/lib/helpers/buildURL.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\buildURL.js",
          "module": "./node_modules/axios/lib/helpers/buildURL.js",
          "moduleName": "./node_modules/axios/lib/helpers/buildURL.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/helpers/cookies.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\cookies.js",
          "module": "./node_modules/axios/lib/helpers/cookies.js",
          "moduleName": "./node_modules/axios/lib/helpers/cookies.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\isURLSameOrigin.js",
          "module": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "moduleName": "./node_modules/axios/lib/helpers/isURLSameOrigin.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        },
        {
          "moduleId": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\normalizeHeaderName.js",
          "module": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "moduleName": "./node_modules/axios/lib/helpers/normalizeHeaderName.js",
          "type": "cjs require",
          "userRequest": "../utils",
          "loc": "3:12-31"
        },
        {
          "moduleId": "./node_modules/axios/lib/helpers/parseHeaders.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\helpers\\parseHeaders.js",
          "module": "./node_modules/axios/lib/helpers/parseHeaders.js",
          "moduleName": "./node_modules/axios/lib/helpers/parseHeaders.js",
          "type": "cjs require",
          "userRequest": "./../utils",
          "loc": "3:12-33"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "'use strict';\n\nvar bind = require('./helpers/bind');\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is a Buffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Buffer, otherwise false\n */\nfunction isBuffer(val) {\n  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)\n    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a plain Object\n *\n * @param {Object} val The value to test\n * @return {boolean} True if value is a plain Object, otherwise false\n */\nfunction isPlainObject(val) {\n  if (toString.call(val) !== '[object Object]') {\n    return false;\n  }\n\n  var prototype = Object.getPrototypeOf(val);\n  return prototype === null || prototype === Object.prototype;\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n * nativescript\n *  navigator.product -> 'NativeScript' or 'NS'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||\n                                           navigator.product === 'NativeScript' ||\n                                           navigator.product === 'NS')) {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (isPlainObject(result[key]) && isPlainObject(val)) {\n      result[key] = merge(result[key], val);\n    } else if (isPlainObject(val)) {\n      result[key] = merge({}, val);\n    } else if (isArray(val)) {\n      result[key] = val.slice();\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\n/**\n * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)\n *\n * @param {string} content with BOM\n * @return {string} content value without BOM\n */\nfunction stripBOM(content) {\n  if (content.charCodeAt(0) === 0xFEFF) {\n    content = content.slice(1);\n  }\n  return content;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isPlainObject: isPlainObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim,\n  stripBOM: stripBOM\n};\n"
    },
    {
      "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "index": 3,
      "index2": 4,
      "size": 1419,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "issuerId": "./src/style/index.less",
      "issuerName": "./src/style/index.less",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "profile": {
            "factory": 549,
            "building": 55
          }
        }
      ],
      "profile": {
        "factory": 517,
        "building": 1123
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./src/style/index.less",
          "moduleName": "./src/style/index.less",
          "type": "cjs require",
          "userRequest": "!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less",
          "loc": "2:26-182"
        }
      ],
      "providedExports": [
        "default"
      ],
      "optimizationBailout": [],
      "depth": 2,
      "source": "// Imports\nimport ___CSS_LOADER_API_IMPORT___ from \"../../node_modules/css-loader/dist/runtime/api.js\";\nimport ___CSS_LOADER_GET_URL_IMPORT___ from \"../../node_modules/css-loader/dist/runtime/getUrl.js\";\nimport ___CSS_LOADER_URL_IMPORT_0___ from \"../webfont.woff2\";\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"webfont\\\";\\n  font-display: swap;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\n}\\nhtml body {\\n  font-family: \\\"webfont\\\" !important;\\n}\\nhtml body div {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  border: 1px red solid;\\n  background: blue;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/style/index.less\"],\"names\":[],\"mappings\":\"AAAA;EACE,sBAAA;EACA,kBAAA;EACA,4DAAA;AACF;AAEA;EAEI,iCAAA;AADJ;AADA;EAIM,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,qBAAA;EACA,gBAAA;AAAN\",\"sourcesContent\":[\"@font-face {\\n  font-family: \\\"webfont\\\";\\n  font-display: swap;\\n  src: url(\\\"../webfont.woff2\\\") format(\\\"woff2\\\");\\n}\\n\\nhtml {\\n  body {\\n    font-family: \\\"webfont\\\" !important;\\n    div {\\n      display: flex;\\n      border: 1px red solid;\\n      background: blue;\\n    }\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\nexport default ___CSS_LOADER_EXPORT___;\n"
    },
    {
      "id": "./node_modules/css-loader/dist/runtime/api.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\runtime\\api.js",
      "name": "./node_modules/css-loader/dist/runtime/api.js",
      "index": 4,
      "index2": 1,
      "size": 2517,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "profile": {
            "factory": 517,
            "building": 1123
          }
        }
      ],
      "profile": {
        "factory": 27,
        "building": 5
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony side effect evaluation",
          "userRequest": "../../node_modules/css-loader/dist/runtime/api.js",
          "loc": "2:0-92"
        },
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony import specifier",
          "userRequest": "../../node_modules/css-loader/dist/runtime/api.js",
          "loc": "5:30-57"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "\"use strict\";\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}"
    },
    {
      "id": "./node_modules/css-loader/dist/runtime/getUrl.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\runtime\\getUrl.js",
      "name": "./node_modules/css-loader/dist/runtime/getUrl.js",
      "index": 5,
      "index2": 2,
      "size": 830,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "profile": {
            "factory": 517,
            "building": 1123
          }
        }
      ],
      "profile": {
        "factory": 27,
        "building": 5
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony side effect evaluation",
          "userRequest": "../../node_modules/css-loader/dist/runtime/getUrl.js",
          "loc": "3:0-99"
        },
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony import specifier",
          "userRequest": "../../node_modules/css-loader/dist/runtime/getUrl.js",
          "loc": "6:41-72"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 3,
      "source": "\"use strict\";\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};"
    },
    {
      "id": "./node_modules/process/browser.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\process\\browser.js",
      "name": "./node_modules/process/browser.js",
      "index": 19,
      "index2": 13,
      "size": 5418,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
      "issuerId": "./node_modules/axios/lib/defaults.js",
      "issuerName": "./node_modules/axios/lib/defaults.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./node_modules/axios/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\index.js",
          "name": "./node_modules/axios/index.js",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/axios/lib/axios.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\axios.js",
          "name": "./node_modules/axios/lib/axios.js",
          "profile": {
            "factory": 17,
            "building": 3
          }
        },
        {
          "id": "./node_modules/axios/lib/defaults.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "name": "./node_modules/axios/lib/defaults.js",
          "profile": {
            "factory": 32,
            "building": 26,
            "dependencies": 543
          }
        }
      ],
      "profile": {
        "factory": 543,
        "building": 16,
        "dependencies": 2
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./node_modules/axios/lib/defaults.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\axios\\lib\\defaults.js",
          "module": "./node_modules/axios/lib/defaults.js",
          "moduleName": "./node_modules/axios/lib/defaults.js",
          "type": "cjs require",
          "userRequest": "process",
          "loc": "1:0-37"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 4,
      "source": "// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n"
    },
    {
      "id": "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\runtime\\injectStylesIntoStyleTag.js",
      "name": "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
      "index": 2,
      "index2": 0,
      "size": 6827,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "issuerId": "./src/style/index.less",
      "issuerName": "./src/style/index.less",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "profile": {
            "factory": 549,
            "building": 55
          }
        }
      ],
      "profile": {
        "factory": 517,
        "building": 1123
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./src/style/index.less",
          "moduleName": "./src/style/index.less",
          "type": "cjs require",
          "userRequest": "!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          "loc": "1:10-94"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 2,
      "source": "\"use strict\";\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce = typeof __webpack_nonce__ !== 'undefined' ? __webpack_nonce__ : null;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};"
    },
    {
      "id": "./src/a.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\a.js",
      "name": "./src/a.js",
      "index": 35,
      "index2": 35,
      "size": 31,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        0
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        }
      ],
      "profile": {
        "factory": 549,
        "building": 55
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "import()",
          "userRequest": "./a.js",
          "loc": "3:0-42"
        }
      ],
      "providedExports": [
        "default"
      ],
      "optimizationBailout": [],
      "depth": 1,
      "source": "export default a = 'aaaaaaaaaa'"
    },
    {
      "id": "./src/images/logo.png",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\url-loader\\dist\\cjs.js??ref--6!D:\\webpack-sourcecode\\webpack-project\\src\\images\\logo.png",
      "name": "./src/images/logo.png",
      "index": 7,
      "index2": 6,
      "size": 59,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        }
      ],
      "profile": {
        "factory": 549,
        "building": 55
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [
        "images/logo.png"
      ],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony side effect evaluation",
          "userRequest": "./images/logo.png",
          "loc": "2:0-36"
        }
      ],
      "providedExports": [
        "default"
      ],
      "optimizationBailout": [],
      "depth": 1,
      "source": "export default __webpack_public_path__ + \"images/logo.png\";"
    },
    {
      "id": "./src/index.js",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
      "name": "./src/index.js",
      "index": 0,
      "index2": 34,
      "size": 527,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": null,
      "issuerId": null,
      "issuerName": null,
      "issuerPath": null,
      "profile": {
        "factory": 26,
        "building": 17
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": null,
          "moduleIdentifier": null,
          "module": null,
          "moduleName": null,
          "type": "single entry",
          "userRequest": "./src/index.js",
          "loc": "main"
        }
      ],
      "providedExports": [],
      "optimizationBailout": [],
      "depth": 0,
      "source": "import css from \"./style/index.less\";\nimport pic from \"./images/logo.png\";\nimport(/**webpackChunkname pic */'./a.js').then(result=>{\n  console.log(result.default)\n})\nconsole.log(\"hello !!!!\");\n\nimport axios from \"axios\";\n\naxios.get(\"/api/info\").then((res) => {\n  console.log(res);\n});\n// let img = new Image();\n// console.log(pic);\n// img.src = pic;\n// let root = document.querySelector(\"#app\");\n// root.append(img);\n\n// 图片 file-loader url-loader\n// 第三方字体\n// 本地开发服务 最主要目的 提升开发体验\n"
    },
    {
      "id": "./src/style/index.less",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "name": "./src/style/index.less",
      "index": 1,
      "index2": 5,
      "size": 615,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
      "issuerId": "./src/index.js",
      "issuerName": "./src/index.js",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        }
      ],
      "profile": {
        "factory": 549,
        "building": 55
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [],
      "reasons": [
        {
          "moduleId": "./src/index.js",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "module": "./src/index.js",
          "moduleName": "./src/index.js",
          "type": "harmony side effect evaluation",
          "userRequest": "./style/index.less",
          "loc": "1:0-37"
        }
      ],
      "providedExports": null,
      "optimizationBailout": [],
      "depth": 1,
      "source": "var api = require(\"!../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = require(\"!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./index.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.id, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};"
    },
    {
      "id": "./src/webfont.woff2",
      "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\file-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\webfont.woff2",
      "name": "./src/webfont.woff2",
      "index": 6,
      "index2": 3,
      "size": 82,
      "cacheable": true,
      "built": true,
      "optional": false,
      "prefetched": false,
      "chunks": [
        "main"
      ],
      "issuer": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
      "issuerId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
      "issuerPath": [
        {
          "id": "./src/index.js",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\src\\index.js",
          "name": "./src/index.js",
          "profile": {
            "factory": 26,
            "building": 17
          }
        },
        {
          "id": "./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\style-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./src/style/index.less",
          "profile": {
            "factory": 549,
            "building": 55
          }
        },
        {
          "id": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "name": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "profile": {
            "factory": 517,
            "building": 1123
          }
        }
      ],
      "profile": {
        "factory": 27,
        "building": 5
      },
      "failed": false,
      "errors": 0,
      "warnings": 0,
      "assets": [
        "3ba1db5cc0555c3eca0e64dc7e1db543.woff2"
      ],
      "reasons": [
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony side effect evaluation",
          "userRequest": "../webfont.woff2",
          "loc": "4:0-61"
        },
        {
          "moduleId": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleIdentifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\css-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\postcss-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\node_modules\\less-loader\\dist\\cjs.js!D:\\webpack-sourcecode\\webpack-project\\src\\style\\index.less",
          "module": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "moduleName": "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/style/index.less",
          "type": "harmony import specifier",
          "userRequest": "../webfont.woff2",
          "loc": "6:73-102"
        }
      ],
      "providedExports": [
        "default"
      ],
      "optimizationBailout": [],
      "depth": 3,
      "source": "export default __webpack_public_path__ + \"3ba1db5cc0555c3eca0e64dc7e1db543.woff2\";"
    }
  ],
  "filteredModules": 0,
  "logging": {
    "webpack.buildChunkGraph.visitModules": {
      "entries": [],
      "filteredEntries": 5,
      "debug": false
    }
  },
  "children": [
    {
      "errors": [],
      "warnings": [],
      "publicPath": "",
      "outputPath": "D:\\webpack-sourcecode\\webpack-project\\dist",
      "assetsByChunkName": {
        "HtmlWebpackPlugin_0": "__child-HtmlWebpackPlugin_0"
      },
      "assets": [
        {
          "name": "__child-HtmlWebpackPlugin_0",
          "size": 4576,
          "chunks": [
            "HtmlWebpackPlugin_0"
          ],
          "chunkNames": [
            "HtmlWebpackPlugin_0"
          ],
          "info": {},
          "emitted": false
        }
      ],
      "filteredAssets": 0,
      "entrypoints": {
        "HtmlWebpackPlugin_0": {
          "chunks": [
            "HtmlWebpackPlugin_0"
          ],
          "assets": [
            "__child-HtmlWebpackPlugin_0"
          ],
          "children": {},
          "childAssets": {}
        }
      },
      "namedChunkGroups": {
        "HtmlWebpackPlugin_0": {
          "chunks": [
            "HtmlWebpackPlugin_0"
          ],
          "assets": [
            "__child-HtmlWebpackPlugin_0"
          ],
          "children": {},
          "childAssets": {}
        }
      },
      "chunks": [
        {
          "id": "HtmlWebpackPlugin_0",
          "rendered": true,
          "initial": true,
          "entry": true,
          "size": 497,
          "names": [
            "HtmlWebpackPlugin_0"
          ],
          "files": [
            "__child-HtmlWebpackPlugin_0"
          ],
          "hash": "af7f3c1817c27ec4f534",
          "siblings": [],
          "parents": [],
          "children": [],
          "childrenByOrder": {},
          "modules": [
            {
              "id": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
              "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-sourcecode\\webpack-project\\src\\index.html",
              "name": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
              "index": 0,
              "index2": 0,
              "size": 497,
              "cacheable": true,
              "built": true,
              "optional": false,
              "prefetched": false,
              "chunks": [
                "HtmlWebpackPlugin_0"
              ],
              "issuer": null,
              "issuerId": null,
              "issuerName": null,
              "issuerPath": null,
              "profile": {
                "factory": 19,
                "building": 26
              },
              "failed": false,
              "errors": 0,
              "warnings": 0,
              "assets": [],
              "reasons": [
                {
                  "moduleId": null,
                  "moduleIdentifier": null,
                  "module": null,
                  "moduleName": null,
                  "type": "single entry",
                  "userRequest": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-sourcecode\\webpack-project\\src\\index.html",
                  "loc": "HtmlWebpackPlugin_0"
                }
              ],
              "providedExports": null,
              "optimizationBailout": [],
              "depth": 0,
              "source": "var _ = __non_webpack_require__(\"D:\\\\webpack-sourcecode\\\\webpack-project\\\\node_modules\\\\lodash\\\\lodash.js\");module.exports = function (templateParams) { with(templateParams) {return (function(data) {\nvar __t, __p = '';\n__p += '<!DOCTYPE html>\\n<html lang=\"en\">\\n  <head>\\n    <meta charset=\"UTF-8\" />\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\\n    <title>Document</title>\\n  </head>\\n  <body>\\n    <div id=\"app\"></div>\\n  </body>\\n</html>\\n';\nreturn __p\n})();}}"
            }
          ],
          "filteredModules": 0,
          "origins": [
            {
              "module": "",
              "moduleIdentifier": "",
              "moduleName": "",
              "loc": "HtmlWebpackPlugin_0",
              "request": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-sourcecode\\webpack-project\\src\\index.html",
              "reasons": []
            }
          ]
        }
      ],
      "modules": [
        {
          "id": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
          "identifier": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-sourcecode\\webpack-project\\src\\index.html",
          "name": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
          "index": 0,
          "index2": 0,
          "size": 497,
          "cacheable": true,
          "built": true,
          "optional": false,
          "prefetched": false,
          "chunks": [
            "HtmlWebpackPlugin_0"
          ],
          "issuer": null,
          "issuerId": null,
          "issuerName": null,
          "issuerPath": null,
          "profile": {
            "factory": 19,
            "building": 26
          },
          "failed": false,
          "errors": 0,
          "warnings": 0,
          "assets": [],
          "reasons": [
            {
              "moduleId": null,
              "moduleIdentifier": null,
              "module": null,
              "moduleName": null,
              "type": "single entry",
              "userRequest": "D:\\webpack-sourcecode\\webpack-project\\node_modules\\html-webpack-plugin\\lib\\loader.js!D:\\webpack-sourcecode\\webpack-project\\src\\index.html",
              "loc": "HtmlWebpackPlugin_0"
            }
          ],
          "providedExports": null,
          "optimizationBailout": [],
          "depth": 0,
          "source": "var _ = __non_webpack_require__(\"D:\\\\webpack-sourcecode\\\\webpack-project\\\\node_modules\\\\lodash\\\\lodash.js\");module.exports = function (templateParams) { with(templateParams) {return (function(data) {\nvar __t, __p = '';\n__p += '<!DOCTYPE html>\\n<html lang=\"en\">\\n  <head>\\n    <meta charset=\"UTF-8\" />\\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\\n    <title>Document</title>\\n  </head>\\n  <body>\\n    <div id=\"app\"></div>\\n  </body>\\n</html>\\n';\nreturn __p\n})();}}"
        }
      ],
      "filteredModules": 0,
      "logging": {
        "webpack.buildChunkGraph.visitModules": {
          "entries": [],
          "filteredEntries": 2,
          "debug": false
        }
      },
      "children": [],
      "name": "HtmlWebpackCompiler"
    }
  ]
}
