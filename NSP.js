// import UPPERCASE.JS.
require('./import/UPPERCASE.JS-COMMON.js');
require('./import/UPPERCASE.JS-NODE.js');

// import UPPERCASE-TRANSPORT.
require('./import/UPPERCASE-TRANSPORT/NODE.js');

// import UPPERCASE-UTIL.
require('./import/UPPERCASE-UTIL/NODE.js');

// import UPPERCASE-UPLOAD.
require('./import/UPPERCASE-UPLOAD/NODE.js');

INIT_OBJECTS();

var
//IMPORT: path
__path = require('path'),

// resume func str
__resumeFuncStr = function resume() {
	
	eval(__resumeFuncStr);
	
	__isPaused = false;
	
	for (__i = __lastIndex; __i <= __source.length; __i += 1) {
		__ch = __source[__i];
		
		if (__i > 0) {
			
			// Node.js용 코드 시작
			if (__ch === '%' && __source[__i - 1] === '<') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
				
					if (__i > 2 && __source[__i - 3] === '\\' && __source[__i - 2] === '\\') {
						print(__source.substring(__lastIndex, __i - 2));
						__startCodeIndex = __i + 1;
					} else if (__i > 1 && __source[__i - 2] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 2));
						print(__source.substring(__i - 1, __i + 1));
					} else {
						print(__source.substring(__lastIndex, __i - 1));
						__startCodeIndex = __i + 1;
					}
					__lastIndex = __i + 1;
				}
			}
			
			// Node.js용 코드 끝
			else if (__ch === '>' && __source[__i - 1] === '%') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex !== -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					try {
						eval(__source.substring(__lastIndex, __i - 1));
					} catch (e) {
						__responseError(__sourcePath, e, __source.substring(__lastIndex, __i - 1), __line, __column, __response);
						return;
					}
					
					__startCodeIndex = -1;
					__lastIndex = __i + 1;
					
					if (__isPaused === true) {
						return;
					}
				}
			}
			
			// 출력 코드 시작
			else if (__ch === '{' && __source[__i - 1] === '{') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					if (__i > 2 && __source[__i - 3] === '\\' && __source[__i - 2] === '\\') {
						print(__source.substring(__lastIndex, __i - 2));
						__startPstrIndex = __i + 1;
					} else if (__i > 1 && __source[__i - 2] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 2));
						print(__source.substring(__i - 1, __i + 1));
					} else {
						print(__source.substring(__lastIndex, __i - 1));
						__startPstrIndex = __i + 1;
					}
					__lastIndex = __i + 1;
				}
			}
			
			// 출력 코드 끝
			else if (__ch === '}' && __source[__i - 1] === '}') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex !== -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					try {
						print(eval(__source.substring(__lastIndex, __i - 1)));
					} catch (e) {
						__responseError(__sourcePath, e, __source.substring(__lastIndex, __i - 1), __line, __column - 1, __response);
						return;
					}
					
					__startPstrIndex = -1;
					__lastIndex = __i + 1;
					
					if (__isPaused === true) {
						return;
					}
				}
			}
			
			// 조건 코드 시작
			else if (__ch === '?' && __source[__i - 1] === '<') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					if (__i > 2 && __source[__i - 3] === '\\' && __source[__i - 2] === '\\') {
						print(__source.substring(__lastIndex, __i - 2));
						__startCondIndex = __i + 1;
					} else if (__i > 1 && __source[__i - 2] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 2));
						print(__source.substring(__i - 1, __i + 1));
					} else {
						print(__source.substring(__lastIndex, __i - 1));
						__startCondIndex = __i + 1;
					}
					__lastIndex = __i + 1;
				}
			}
			
			// 조건 코드 끝
			else if (__i > 3 && __ch === '>' && __source[__i - 1] === '?' && __source[__i - 2] === '/' && __source[__i - 3] === '<') {
				
				if (
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					if (__i > 5 && __source[__i - 5] === '\\' && __source[__i - 4] === '\\') {
						if (__isIgnored !== true) {
							print(__source.substring(__lastIndex, __i - 4));
						}
						__isIgnoreStack.pop();
						__isIgnored = __isIgnoreStack[__isIgnoreStack.length - 1];
					} else if (__i > 3 && __source[__i - 4] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 4));
						print(__source.substring(__i - 3, __i + 1));
					} else {
						if (__isIgnored !== true) {
							print(__source.substring(__lastIndex, __i - 3));
						}
						__isIgnoreStack.pop();
						__isIgnored = __isIgnoreStack[__isIgnoreStack.length - 1];
					}
					__lastIndex = __i + 1;
				}
			}
			
			// 반복 코드 시작
			else if (__ch === '~' && __source[__i - 1] === '<') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					if (__i > 2 && __source[__i - 3] === '\\' && __source[__i - 2] === '\\') {
						print(__source.substring(__lastIndex, __i - 2));
						__startEachIndex = __i + 1;
					} else if (__i > 1 && __source[__i - 2] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 2));
						print(__source.substring(__i - 1, __i + 1));
					} else {
						print(__source.substring(__lastIndex, __i - 1));
						__startEachIndex = __i + 1;
					}
					__lastIndex = __i + 1;
				}
			}
			
			// 반복 코드 끝
			else if (__i > 3 && __ch === '>' && __source[__i - 1] === '~' && __source[__i - 2] === '/' && __source[__i - 3] === '<') {
				
				if (
				__isIgnored !== true &&
				__startCodeIndex === -1 &&
				__startPstrIndex === -1 &&
				__startCondIndex === -1 &&
				__startEachIndex === -1) {
					
					if (__i > 5 && __source[__i - 5] === '\\' && __source[__i - 4] === '\\') {
						
						print(__source.substring(__lastIndex, __i - 4));
						
						if (__repeatInfo !== undefined) {
							
							__repeatTarget = __repeatInfo.target;
							__repeatTargetName = __repeatInfo.targetName;
							__repeatTargetFirstKey = __repeatInfo.key;
							__repeatItemName = __repeatInfo.name;
							__repeatItemValue = __repeatInfo.value;
							
							// find next key
							__repeatTargetBeforeKey = undefined;
							for (__repeatTargetNowKey in __repeatTarget) {
								if (__repeatTarget.hasOwnProperty(__repeatTargetNowKey) === true) {
									if (__repeatTargetBeforeKey === __repeatTargetFirstKey) {
										__repeatInfo.key = __repeatTargetNowKey;
										break;
									}
									__repeatTargetBeforeKey = __repeatTargetNowKey;
								}
							}
							
							if (__repeatTargetNowKey !== __repeatTargetFirstKey) {
								
								__i = __repeatInfo.startIndex - 1;
								__line = __repeatInfo.line;
								__column = __repeatInfo.column;
								
								if (__repeatItemName === undefined) {
									eval('var ' + __repeatItemValue + ' = ' + __repeatTargetName + '[\'' + __repeatTargetNowKey + '\'];');
								} else {
									eval(
										'var ' + __repeatItemName + ' = \'' + __repeatTargetNowKey + '\';' +
										'var ' + __repeatItemValue + ' = ' + __repeatTargetName + '[\'' + __repeatTargetNowKey + '\'];'
									);
								}
							}
							
							else {
								__isRepeatStack.pop();
								__repeatInfo = __isRepeatStack[__isRepeatStack.length - 1];
							}
						}
					}
					
					else if (__i > 3 && __source[__i - 4] === '\\') {
						// Node.js용 코드 아님, 무시
						print(__source.substring(__lastIndex, __i - 4));
						print(__source.substring(__i - 3, __i + 1));
					}
					
					else {
						
						print(__source.substring(__lastIndex, __i - 3));
						
						if (__repeatInfo !== undefined) {
							
							__repeatTarget = __repeatInfo.target;
							__repeatTargetName = __repeatInfo.targetName;
							__repeatTargetFirstKey = __repeatInfo.key;
							__repeatItemName = __repeatInfo.name;
							__repeatItemValue = __repeatInfo.value;
							
							// find next key
							__repeatTargetBeforeKey = undefined;
							for (__repeatTargetNowKey in __repeatTarget) {
								if (__repeatTarget.hasOwnProperty(__repeatTargetNowKey) === true) {
									if (__repeatTargetBeforeKey === __repeatTargetFirstKey) {
										__repeatInfo.key = __repeatTargetNowKey;
										break;
									}
									__repeatTargetBeforeKey = __repeatTargetNowKey;
								}
							}
							
							if (__repeatTargetNowKey !== __repeatTargetFirstKey) {
								
								__i = __repeatInfo.startIndex - 1;
								__line = __repeatInfo.line;
								__column = __repeatInfo.column;
								
								if (__repeatItemName === undefined) {
									eval('var ' + __repeatItemValue + ' = ' + __repeatTargetName + '[\'' + __repeatTargetNowKey + '\'];');
								} else {
									eval(
										'var ' + __repeatItemName + ' = \'' + __repeatTargetNowKey + '\';' +
										'var ' + __repeatItemValue + ' = ' + __repeatTargetName + '[\'' + __repeatTargetNowKey + '\'];'
									);
								}
							}
							
							else {
								__isRepeatStack.pop();
								__repeatInfo = __isRepeatStack[__isRepeatStack.length - 1];
							}
						}
					}
					
					__lastIndex = __i + 1;
				}
			}
			
			// 조건 코드나 반복 코드 시작의 끝
			else if (__ch === '>') {
				
				if (
				__startCodeIndex === -1 &&
				__startPstrIndex === -1) {
					
					if (
					__startCondIndex !== -1 &&
					__startEachIndex === -1) {
						
						try {
							if (eval(__source.substring(__lastIndex, __i)) === false) {
								__isIgnored = true;
								__isIgnoreStack.push(true);
							} else {
								__isIgnoreStack.push(false);
							}
						} catch (e) {
							__responseError(__sourcePath, e, __source.substring(__lastIndex, __i), __line, __column, __response);
							return;
						}
						
						__startCondIndex = -1;
						__lastIndex = __i + 1;
						
						if (__isPaused === true) {
							return;
						}
					}
					
					else if (
					__isIgnored !== true &&
					__startCondIndex === -1 &&
					__startEachIndex !== -1 &&
					__source[__i - 1] !== '-') {
						
						try {
							__repeatSplits = __source.substring(__lastIndex, __i).split('->');
							__repeatTargetName = __repeatSplits[0];
							__repeatTarget = eval(__repeatTargetName);
							__repeatItemStr = __repeatSplits[1];
							
							// name이 없을 때
							if (__repeatItemStr.indexOf(':') === -1) {
								
								// find first key
								for (__repeatTargetFirstKey in __repeatTarget) {
									if (__repeatTarget.hasOwnProperty(__repeatTargetFirstKey) === true) {
										break;
									}
								}
								
								__isRepeatStack.push(__repeatInfo = {
									target : __repeatTarget,
									targetName : __repeatTargetName,
									key : __repeatTargetFirstKey,
									value : __repeatItemStr,
									startIndex : __i + 1,
									line : __line,
									column : __column
								});
								
								eval('var ' + __repeatItemStr + ' = ' + __repeatTargetName + '[\'' + __repeatTargetFirstKey + '\'];');
							}
							
							// name이 있을 때
							else {
								__repeatItemSplits = __repeatItemStr.split(':');
								__repeatItemName = __repeatItemSplits[0];
								__repeatItemValue = __repeatItemSplits[1];
								
								// find first key
								for (__repeatTargetFirstKey in __repeatTarget) {
									if (__repeatTarget.hasOwnProperty(__repeatTargetFirstKey) === true) {
										break;
									}
								}
								
								__isRepeatStack.push(__repeatInfo = {
									target : __repeatTarget,
									targetName : __repeatTargetName,
									key : __repeatTargetFirstKey,
									name : __repeatItemName,
									value : __repeatItemValue,
									startIndex : __i + 1,
									line : __line,
									column : __column
								});
								
								eval(
									'var ' + __repeatItemName + ' = \'' + __repeatTargetFirstKey + '\';' +
									'var ' + __repeatItemValue + ' = ' + __repeatTargetName + '[\'' + __repeatTargetFirstKey + '\'];'
								);
							}
						} catch (e) {
							__responseError(__sourcePath, e, __source.substring(__lastIndex, __i), __line, __column, __response);
							return;
						}
						
						__startEachIndex = -1;
						__lastIndex = __i + 1;
						
						if (__isPaused === true) {
							return;
						}
					}
				}
			}
		}
		
		if (__ch === '\n') {
			__line += 1;
			__column = 1;
		} else {
			__column += 1;
		}
	}
	
	if (__startCodeIndex !== -1 || __startPstrIndex !== -1) {
		print(__source.substring(__lastIndex - 2));
	} else {
		print(__source.substring(__lastIndex));
	}
	
	__response({
		content : __html,
		contentType : 'text/html'
	});
	
}.toString();

function __responseError(path, e, code, line, column, response) {
	
	var
	// code splits
	codeSplits,
	
	// code line
	codeLine = 0,
	
	// code column
	codeColumn = 0;
	
	if (code !== undefined) {
		codeSplits = code.split('\n');
		codeLine = codeSplits.length - 1;
		codeColumn = codeSplits[0].length;
	}
	
	if (line === -1) {
		line = codeLine + 1;
	}
	if (column === -1) {
		column = codeColumn + 1;
	}
	
	response({
		statusCode : 500,
		content : 
'<!doctype html><html><head><meta charset="UTF-8"><title>' + e + '</title></head><body>' +
'<p><b>' + e + '</b></p>' +
'<b>path: </b>' + path + ' (' + (line - codeLine) + ':' + (column - codeColumn) + ')' +
(code === undefined ? '' : '<br><b>code: </b>' + code) +
'</body></html>',
		contentType : 'text/html'
	});
}

function __responseNotFound(path, response) {
	
	response({
		statusCode : 404,
		content : 
'<!doctype html><html><head><meta charset="UTF-8"><title>Page not found.</title></head><body>' +
'<p><b>Page not found.</b></p>' +
'<b>path: </b>' + path +
'</body></html>',
		contentType : 'text/html'
	});
}

function __parse(__requestInfo, __sourcePath, __source, __response, self) {
	
	var
	// html
	__html = '',
	
	// last index
	__lastIndex = 0,
	
	// start code index
	__startCodeIndex = -1,
	
	// start pstr index
	__startPstrIndex = -1,
	
	// start conditional index
	__startCondIndex = -1,
	
	// start each index
	__startEachIndex = -1,
	
	// is paused
	__isPaused,
	
	// is ignored
	__isIgnored,
	
	// is ignore stack
	__isIgnoreStack = [],
	
	// is repeat stack
	__isRepeatStack = [],
	
	// repeat info
	__repeatInfo,
	
	// for repeat
	__repeatSplits,
	__repeatTarget, __repeatTargetName, __repeatTargetNowKey, __repeatTargetBeforeKey, __repeatTargetFirstKey,
	__repeatItemStr, __repeatItemSplits, __repeatItemName, __repeatItemValue,
	
	// ohters
	__i, __ch, __line = 1, __column = 1;
	
	function print(content) {
		if (typeof content === 'string') {
			__html += content;
		} else {
			__html += JSON.stringify(content);
		}
	}
	
	function include(__uri, __callback) {
		
		var
		// fullPath
		__fullPath = __path.dirname(__sourcePath) + '/' + __uri,
		
		// saved last index
		savedLastIndex = __lastIndex;
		
		pause();
		
		READ_FILE(__fullPath, {
			
			notExists : function() {
				__responseError(__fullPath, 'File not exists.', __source.substring(savedLastIndex, __i - 1), __line, __column - 1, __response);
			},
			
			success : function(__buffer) {
				
				var
				// ext
				ext = __path.extname(__uri).toLowerCase();
				
				if (ext === '.nsp') {
					__parse(__requestInfo, __fullPath, __buffer.toString(), function(res) {
						print(res.content);
						if (__callback !== undefined) {
							__callback();
						}
						resume();
					}, self);
				}
				
				else if (ext === '.js') {
					
					try {
						eval(__buffer.toString());
					} catch (e) {
						__responseError(__fullPath, e, __buffer.toString(), -1, -1, __response);
						return;
					}
					
					if (__callback !== undefined) {
						__callback();
					}
					resume();
				}
			}
		});
	}
	
	function upload(uploadPath, callbackOrHandlers) {
		
		var
		// callback
		callback,

		// error handler
		errorHandler,

		// over file size handler
		overFileSizeHandler;

		if (CHECK_IS_DATA(callbackOrHandlers) !== true) {
			callback = callbackOrHandlers;
		} else {
			callback = callbackOrHandlers.success;
			errorHandler = callbackOrHandlers.error;
			overFileSizeHandler = callbackOrHandlers.overFileSize;
		}
		
		UPLOAD_REQUEST({
			requestInfo : __requestInfo,
			uploadPath : __path.dirname(__sourcePath) + '/' + uploadPath
		}, {
			error : errorHandler,
			overFileSize : overFileSizeHandler,
			success : callback
		});
	}
	
	function pause() {
		__isPaused = true;
	}
	
	eval(__resumeFuncStr);
	
	resume();
}

// 멀티코어 CPU 지원
CPU_CLUSTERING(function() {
	
	var
	// config
	config = PARSE_STR(READ_FILE({
		path : 'config.json',
		isSync : true
	}).toString()),
	
	// port
	port = config.port,
	
	// root path
	rootPath = config.rootPath,
	
	// cached file infos
	cachedFileInfos = {};
	
	// dev mode가 true일 때는 리소스 캐싱을 하지 않습니다.
	CONFIG.isDevMode = config.isDevMode;

	// run web server
	RESOURCE_SERVER({
		port : port,
		rootPath : rootPath,
		version : Date.now(),
		noParsingParamsURI : config.uploadURI
	}, {
		
		notExistsResource : function(resourcePath, requestInfo, response) {
			__responseNotFound(resourcePath, response);
		},
		
		requestListener : function(requestInfo, response, onDisconnected) {
		
			var
			// uri
			uri = requestInfo.uri,
			
			// path
			path;
			
			if (uri === '') {
				uri = 'index.nsp';
			}
			
			path = rootPath + '/' + uri;
		
			if (__path.extname(uri).toLowerCase() === '.nsp') {
				
				GET_FILE_INFO(path, {
					
					notExists : function() {
						__responseNotFound(path, response);
					},
					
					success : function(fileInfo) {
						
						var
						// cached file info
						cachedFileInfo = cachedFileInfos[path];
						
						// 캐시된 파일 제공
						if (cachedFileInfo !== undefined
							&& (
								(fileInfo.lastUpdateTime !== undefined && cachedFileInfo.lastUpdateTime.getTime() === fileInfo.lastUpdateTime.getTime())
								|| (fileInfo.createTime !== undefined && cachedFileInfo.lastUpdateTime.getTime() === fileInfo.createTime.getTime())
							)
						) {
							
							__parse(requestInfo, path, cachedFileInfo.content, response, {
								params : requestInfo.params
							});
						}
						
						else {
							
							READ_FILE(path, {
								notExists : function() {
									__responseNotFound(path, response);
								},
								error : function(e) {
									__responseError(path, e, undefined, 0, 0, response);
								},
								success : function(buffer) {
									
									var
									// content
									content = buffer.toString();
									
									cachedFileInfos[path] = {
										content : content,
										lastUpdateTime : fileInfo.lastUpdateTime === undefined ? fileInfo.createTime : fileInfo.lastUpdateTime
									};
									
									__parse(requestInfo, path, content, response, {
										params : requestInfo.params
									});
								}
							});
						}
					}
				});
		
				return false;
			}
		}
	});

	console.log('NSP server started. - http://localhost:' + port);
});
