/*
 * AUTO-GENERATED, DO NOT EDIT BY HAND
 */
// In order to process bindings, we first need type registry from compiled code to be available.
ut.meta.registerTypes();
var game = game || {};
game.State = {
  INIT: 0,
  WAIT: 1,
  GET_JUDGE_CARD: 2,
  SEND_CARD: 3
};
game.State._typeDesc = (function() {
  var enumType = ut.meta.getType('int32');
  return ut.meta.allocType(6, 'game.State', 4, [
    {name: 'INIT', offset: 0, type: enumType},
    {name: 'WAIT', offset: 1, type: enumType},
    {name: 'GET_JUDGE_CARD', offset: 2, type: enumType},
    {name: 'SEND_CARD', offset: 3, type: enumType}
  ]);
})();
var entities = entities || {};
entities.game = entities.game || {};
entities.game.CardsInHand = entities.game.CardsInHand || {};
entities.game.CardsInHand.Component = function() {
};
entities.game.CardsInHand.Component.prototype = Object.create(null);
entities.game.CardsInHand.Component.prototype.constructor = entities.game.CardsInHand.Component;
Object.defineProperties(entities.game.CardsInHand.Component.prototype, {
});
entities.game.CardsInHand.Component._size = 1;
entities.game.CardsInHand.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CardsInHand.Component.prototype);
  return v;
};
entities.game.CardsInHand.Component._toPtr = function(ptr, v) {
};
entities.game.CardsInHand.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CardsInHand.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CardsInHand.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CardsInHand.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CardsInHand.Component.StorageView.prototype = Object.create(null);
entities.game.CardsInHand.Component.StorageView.prototype.constructor = entities.game.CardsInHand.Component.StorageView;
entities.game.CardsInHand.Component._view = entities.game.CardsInHand.Component.StorageView;
entities.game.CardsInHand.Component.StorageView._isSharedComp = entities.game.CardsInHand.Component._isSharedComp = false;
entities.game.CardsInHand.Component.StorageView._fromPtr = entities.game.CardsInHand.Component._fromPtr;
entities.game.CardsInHand.Component.StorageView._toPtr = entities.game.CardsInHand.Component._toPtr;
entities.game.CardsInHand.Component.StorageView._tempHeapPtr = entities.game.CardsInHand.Component._tempHeapPtr;
entities.game.CardsInHand.Component.StorageView._size = entities.game.CardsInHand.Component._size;
entities.game.CardsInHand.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CardsInHand.Component.StorageView.prototype, {
});
entities.game.CardsInHand.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CardsInHand.Component is a POD type, so a JavaScript side copy constructor entities.game.CardsInHand.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CardsInHand.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CardsInHand.Component', 1, []);
})();
Object.defineProperties(entities.game.CardsInHand.Component, { cid: { configurable: true, get: function() { delete entities.game.CardsInHand.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CardsInHand.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CardsInHand.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CardsInHand.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CardsInHand.Component.cid; } } });
entities.game.CardsPlayed = entities.game.CardsPlayed || {};
entities.game.CardsPlayed.Component = function() {
};
entities.game.CardsPlayed.Component.prototype = Object.create(null);
entities.game.CardsPlayed.Component.prototype.constructor = entities.game.CardsPlayed.Component;
Object.defineProperties(entities.game.CardsPlayed.Component.prototype, {
});
entities.game.CardsPlayed.Component._size = 1;
entities.game.CardsPlayed.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.CardsPlayed.Component.prototype);
  return v;
};
entities.game.CardsPlayed.Component._toPtr = function(ptr, v) {
};
entities.game.CardsPlayed.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.CardsPlayed.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.CardsPlayed.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.CardsPlayed.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.CardsPlayed.Component.StorageView.prototype = Object.create(null);
entities.game.CardsPlayed.Component.StorageView.prototype.constructor = entities.game.CardsPlayed.Component.StorageView;
entities.game.CardsPlayed.Component._view = entities.game.CardsPlayed.Component.StorageView;
entities.game.CardsPlayed.Component.StorageView._isSharedComp = entities.game.CardsPlayed.Component._isSharedComp = false;
entities.game.CardsPlayed.Component.StorageView._fromPtr = entities.game.CardsPlayed.Component._fromPtr;
entities.game.CardsPlayed.Component.StorageView._toPtr = entities.game.CardsPlayed.Component._toPtr;
entities.game.CardsPlayed.Component.StorageView._tempHeapPtr = entities.game.CardsPlayed.Component._tempHeapPtr;
entities.game.CardsPlayed.Component.StorageView._size = entities.game.CardsPlayed.Component._size;
entities.game.CardsPlayed.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.CardsPlayed.Component.StorageView.prototype, {
});
entities.game.CardsPlayed.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.CardsPlayed.Component is a POD type, so a JavaScript side copy constructor entities.game.CardsPlayed.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.CardsPlayed.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.CardsPlayed.Component', 1, []);
})();
Object.defineProperties(entities.game.CardsPlayed.Component, { cid: { configurable: true, get: function() { delete entities.game.CardsPlayed.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.CardsPlayed.Component.cid = Module._ut_component_register_cid_with_type(entities.game.CardsPlayed.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.CardsPlayed.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.CardsPlayed.Component.cid; } } });
entities.game.Start = entities.game.Start || {};
entities.game.Start.Component = function() {
};
entities.game.Start.Component.prototype = Object.create(null);
entities.game.Start.Component.prototype.constructor = entities.game.Start.Component;
Object.defineProperties(entities.game.Start.Component.prototype, {
});
entities.game.Start.Component._size = 1;
entities.game.Start.Component._fromPtr = function(ptr, v) {
  v = v || Object.create(entities.game.Start.Component.prototype);
  return v;
};
entities.game.Start.Component._toPtr = function(ptr, v) {
};
entities.game.Start.Component._toTempHeapPtr = function(ptr, v) {
};
entities.game.Start.Component._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) entities.game.Start.Component._toTempHeapPtr(ptr, v);
  return ptr;
};
entities.game.Start.Component.StorageView = function(ptr) {
  this._ptr = ptr;
};
entities.game.Start.Component.StorageView.prototype = Object.create(null);
entities.game.Start.Component.StorageView.prototype.constructor = entities.game.Start.Component.StorageView;
entities.game.Start.Component._view = entities.game.Start.Component.StorageView;
entities.game.Start.Component.StorageView._isSharedComp = entities.game.Start.Component._isSharedComp = false;
entities.game.Start.Component.StorageView._fromPtr = entities.game.Start.Component._fromPtr;
entities.game.Start.Component.StorageView._toPtr = entities.game.Start.Component._toPtr;
entities.game.Start.Component.StorageView._tempHeapPtr = entities.game.Start.Component._tempHeapPtr;
entities.game.Start.Component.StorageView._size = entities.game.Start.Component._size;
entities.game.Start.Component.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(entities.game.Start.Component.StorageView.prototype, {
});
entities.game.Start.Component._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// entities.game.Start.Component is a POD type, so a JavaScript side copy constructor entities.game.Start.Component._copyFn = function copy(src, dst) { ... } does not need to be generated for it
entities.game.Start.Component._typeDesc = (function() {
  return ut.meta.allocType(5, 'entities.game.Start.Component', 1, []);
})();
Object.defineProperties(entities.game.Start.Component, { cid: { configurable: true, get: function() { delete entities.game.Start.Component.cid; var offsetsPtr = 0, offsetsCount = 0; return entities.game.Start.Component.cid = Module._ut_component_register_cid_with_type(entities.game.Start.Component._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(entities.game.Start.Component.StorageView, { cid: { configurable: true, get: function() { return entities.game.Start.Component.cid; } } });
game.CardTag = function(arg0, arg1) {
  this._Position = (arg0|0);
  this._IsInHand = (arg1 ? true : false);
};
game.CardTag.prototype = Object.create(null);
game.CardTag.prototype.constructor = game.CardTag;
Object.defineProperties(game.CardTag.prototype, {
  Position: {
    get: function() { return this._Position; },
    set: function(v) { this._Position = (v|0); },
  },
  IsInHand: {
    get: function() { return this._IsInHand; },
    set: function(v) { this._IsInHand = (v ? true : false); },
  },
});
game.CardTag._size = 2;
game.CardTag._fromPtr = function(ptr, v) {
  v = v || Object.create(game.CardTag.prototype);
  v._Position = HEAP8[ptr+0];
  v._IsInHand = (HEAP8[ptr+1]?true:false);
  return v;
};
game.CardTag._toPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.Position;
  HEAP8[ptr+1] = (v.IsInHand)?1:0;
};
game.CardTag._toTempHeapPtr = function(ptr, v) {
  HEAP8[ptr+0] = v.Position;
  HEAP8[ptr+1] = (v.IsInHand)?1:0;
};
game.CardTag._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(2);
  if (v) game.CardTag._toTempHeapPtr(ptr, v);
  return ptr;
};
game.CardTag.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.CardTag.StorageView.prototype = Object.create(null);
game.CardTag.StorageView.prototype.constructor = game.CardTag.StorageView;
game.CardTag._view = game.CardTag.StorageView;
game.CardTag.StorageView._isSharedComp = game.CardTag._isSharedComp = false;
game.CardTag.StorageView._fromPtr = game.CardTag._fromPtr;
game.CardTag.StorageView._toPtr = game.CardTag._toPtr;
game.CardTag.StorageView._tempHeapPtr = game.CardTag._tempHeapPtr;
game.CardTag.StorageView._size = game.CardTag._size;
game.CardTag.StorageView.prototype.$advance = function() {
  this._ptr += 2;
};
Object.defineProperties(game.CardTag.StorageView.prototype, {
  Position: {
    get: function() { return HEAP8[this._ptr+0]; },
    set: function(v) { HEAP8[this._ptr+0] = v; },
  },
  IsInHand: {
    get: function() { return (HEAP8[this._ptr+1]?true:false); },
    set: function(v) { HEAP8[this._ptr+1] = (v)?1:0; },
  },
});
game.CardTag._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// game.CardTag is a POD type, so a JavaScript side copy constructor game.CardTag._copyFn = function copy(src, dst) { ... } does not need to be generated for it
game.CardTag._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.CardTag', 2, [
    {name: 'Position', offset: 0, type: ut.meta.getType('int8')},
    {name: 'IsInHand', offset: 1, type: ut.meta.getType('bool')}
  ]);
})();
Object.defineProperties(game.CardTag, { cid: { configurable: true, get: function() { delete game.CardTag.cid; var offsetsPtr = 0, offsetsCount = 0; return game.CardTag.cid = Module._ut_component_register_cid_with_type(game.CardTag._typeDesc, 1, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(game.CardTag.StorageView, { cid: { configurable: true, get: function() { return game.CardTag.cid; } } });
game.CardTag.Position = { $ofs:0, $t:"int8_t", $c:game.CardTag };
game.CardTag.IsInHand = { $ofs:1, $t:"bool", $c:game.CardTag };
game.GameConfig = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
  this._PlayerId = (arg0 === undefined ? '' : arg0);
  this._RoomId = (arg1 === undefined ? '' : arg1);
  this._IsJudge = (arg2 ? true : false);
  this._FieldCards = (arg3 === undefined ? new Array() : ((arg3 instanceof Array) ? arg3 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._CanPlay = (arg4 ? true : false);
  this._HandCards = (arg5 === undefined ? new Array() : ((arg5 instanceof Array) ? arg5 : (function() { throw new Error('Assigning non-array to array field'); })()));
  this._State = (arg6|0);
};
game.GameConfig.prototype = Object.create(null);
game.GameConfig.prototype.constructor = game.GameConfig;
Object.defineProperties(game.GameConfig.prototype, {
  PlayerId: {
    get: function() { return this._PlayerId; },
    set: function(v) { this._PlayerId = (v === undefined ? '' : v); },
  },
  RoomId: {
    get: function() { return this._RoomId; },
    set: function(v) { this._RoomId = (v === undefined ? '' : v); },
  },
  IsJudge: {
    get: function() { return this._IsJudge; },
    set: function(v) { this._IsJudge = (v ? true : false); },
  },
  FieldCards: {
    get: function() { return this._FieldCards; },
    set: function(v) { this._FieldCards = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  CanPlay: {
    get: function() { return this._CanPlay; },
    set: function(v) { this._CanPlay = (v ? true : false); },
  },
  HandCards: {
    get: function() { return this._HandCards; },
    set: function(v) { this._HandCards = (v === undefined ? new Array() : ((v instanceof Array) ? v : (function() { throw new Error('Assigning non-array to array field'); })())); },
  },
  State: {
    get: function() { return this._State; },
    set: function(v) { this._State = (v|0); },
  },
});
game.GameConfig._size = 52;
game.GameConfig._fromPtr = function(ptr, v) {
  v = v || Object.create(game.GameConfig.prototype);
  v._PlayerId = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._RoomId = (Module._ut_nativestring_data(ptr+8) ? UTF8ToString(Module._ut_nativestring_data(ptr+8)) : "");
  v._IsJudge = (HEAP8[ptr+16]?true:false);
  v._FieldCards = ut.nativeBufferToJsArray(ptr+20, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  v._CanPlay = (HEAP8[ptr+32]?true:false);
  v._HandCards = ut.nativeBufferToJsArray(ptr+36, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); });
  v._State = HEAP32[(ptr+48)>>2];
  return v;
};
game.GameConfig._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.PlayerId);
  ut.newHeapNativeString(ptr+8, v.RoomId);
  HEAP8[ptr+16] = (v.IsJudge)?1:0;
  ut.jsArrayToExistingNativeBuffer_string(v.FieldCards, ptr+20, function(p, v) { ut.writeHeapNativeString(p, v); });
  HEAP8[ptr+32] = (v.CanPlay)?1:0;
  ut.jsArrayToExistingNativeBuffer_string(v.HandCards, ptr+36, function(p, v) { ut.writeHeapNativeString(p, v); });
  HEAP32[(ptr+48)>>2] = v.State;
};
game.GameConfig._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.PlayerId);
  ut.toExistingScratchNativeString(ptr+8, v.RoomId);
  HEAP8[ptr+16] = (v.IsJudge)?1:0;
  ut.jsArrayToExistingScratchNativeBuffer_string(v.FieldCards, ptr+20, function(p, v) { ut.toExistingScratchNativeString(p, v); });
  HEAP8[ptr+32] = (v.CanPlay)?1:0;
  ut.jsArrayToExistingScratchNativeBuffer_string(v.HandCards, ptr+36, function(p, v) { ut.toExistingScratchNativeString(p, v); });
  HEAP32[(ptr+48)>>2] = v.State;
};
game.GameConfig._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(52);
  if (v) game.GameConfig._toTempHeapPtr(ptr, v);
  return ptr;
};
game.GameConfig.StorageView = function(ptr) {
  this._ptr = ptr;
};
game.GameConfig.StorageView.prototype = Object.create(null);
game.GameConfig.StorageView.prototype.constructor = game.GameConfig.StorageView;
game.GameConfig._view = game.GameConfig.StorageView;
game.GameConfig.StorageView._isSharedComp = game.GameConfig._isSharedComp = false;
game.GameConfig.StorageView._fromPtr = game.GameConfig._fromPtr;
game.GameConfig.StorageView._toPtr = game.GameConfig._toPtr;
game.GameConfig.StorageView._tempHeapPtr = game.GameConfig._tempHeapPtr;
game.GameConfig.StorageView._size = game.GameConfig._size;
game.GameConfig.StorageView.prototype.$advance = function() {
  this._ptr += 52;
};
Object.defineProperties(game.GameConfig.StorageView.prototype, {
  PlayerId: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  RoomId: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+8) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+8)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+8, v); },
  },
  IsJudge: {
    get: function() { return (HEAP8[this._ptr+16]?true:false); },
    set: function(v) { HEAP8[this._ptr+16] = (v)?1:0; },
  },
  FieldCards: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+20, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+20, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
  CanPlay: {
    get: function() { return (HEAP8[this._ptr+32]?true:false); },
    set: function(v) { HEAP8[this._ptr+32] = (v)?1:0; },
  },
  HandCards: {
    get: function() { return ut.nativeBufferToJsArray(this._ptr+36, 8, function(p) { return (Module._ut_nativestring_data(p) ? UTF8ToString(Module._ut_nativestring_data(p)) : ""); }); },
    set: function(v) { ut.jsArrayToExistingNativeBuffer_string(v, this._ptr+36, function(p, v) { ut.writeHeapNativeString(p, v); }); },
  },
  State: {
    get: function() { return HEAP32[(this._ptr+48)>>2]; },
    set: function(v) { HEAP32[(this._ptr+48)>>2] = v; },
  },
});
game.GameConfig._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
  Module._ut_nativestring_placement_delete(ptr + 8);
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 20);
  Module._ut_nativebuffer_nativestring_placement_delete(ptr + 36);
};
game.GameConfig._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  Module._ut_nativestring_copy_construct(dst + 8, src + 8);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 20, src + 20);
  for(var i = 0; i < 1; ++i) HEAPU8[dst+32+i] = HEAPU8[src+32+i];
  Module._ut_nativebuffer_nativestring_copy_construct(dst + 36, src + 36);
  for(var i = 0; i < 4; ++i) HEAPU8[dst+48+i] = HEAPU8[src+48+i];
};
game.GameConfig._typeDesc = (function() {
  return ut.meta.allocType(5, 'game.GameConfig', 52, [
    {name: 'PlayerId', offset: 0, type: ut.meta.getType('string')},
    {name: 'RoomId', offset: 8, type: ut.meta.getType('string')},
    {name: 'IsJudge', offset: 16, type: ut.meta.getType('bool')},
    {name: 'FieldCards', offset: 20, type: ut.meta.getType('ut.NativeBuffer<string>')},
    {name: 'CanPlay', offset: 32, type: ut.meta.getType('bool')},
    {name: 'HandCards', offset: 36, type: ut.meta.getType('ut.NativeBuffer<string>')},
    {name: 'State', offset: 48, type: ut.meta.getType('game.State')}
  ]);
})();
Object.defineProperties(game.GameConfig, { cid: { configurable: true, get: function() { delete game.GameConfig.cid; var offsetsPtr = 0, offsetsCount = 0; return game.GameConfig.cid = Module._ut_component_register_cid_with_type(game.GameConfig._typeDesc, 4, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(game.GameConfig._dtorFn), ut.CopyFn._cb.token_for(game.GameConfig._copyFn)); } } });
Object.defineProperties(game.GameConfig.StorageView, { cid: { configurable: true, get: function() { return game.GameConfig.cid; } } });
game.GameConfig.PlayerId = { $ofs:0, $t:"System.String", $c:game.GameConfig };
game.GameConfig.RoomId = { $ofs:8, $t:"System.String", $c:game.GameConfig };
game.GameConfig.IsJudge = { $ofs:16, $t:"bool", $c:game.GameConfig };
game.GameConfig.FieldCards = { $ofs:20, $t:"ut.DynamicArray`1", $c:game.GameConfig };
game.GameConfig.CanPlay = { $ofs:32, $t:"bool", $c:game.GameConfig };
game.GameConfig.HandCards = { $ofs:36, $t:"ut.DynamicArray`1", $c:game.GameConfig };
game.GameConfig.State = { $ofs:48, $t:"game.State", $c:game.GameConfig };
var ut = ut || {};
ut.Core2D = ut.Core2D || {};
ut.Core2D.layers = ut.Core2D.layers || {};
ut.Core2D.layers.Default = function() {
};
ut.Core2D.layers.Default.prototype = Object.create(null);
ut.Core2D.layers.Default.prototype.constructor = ut.Core2D.layers.Default;
Object.defineProperties(ut.Core2D.layers.Default.prototype, {
});
ut.Core2D.layers.Default._size = 1;
ut.Core2D.layers.Default._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Default.prototype);
  return v;
};
ut.Core2D.layers.Default._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Default._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Default._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Default.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Default.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Default.StorageView.prototype.constructor = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default._view = ut.Core2D.layers.Default.StorageView;
ut.Core2D.layers.Default.StorageView._isSharedComp = ut.Core2D.layers.Default._isSharedComp = false;
ut.Core2D.layers.Default.StorageView._fromPtr = ut.Core2D.layers.Default._fromPtr;
ut.Core2D.layers.Default.StorageView._toPtr = ut.Core2D.layers.Default._toPtr;
ut.Core2D.layers.Default.StorageView._tempHeapPtr = ut.Core2D.layers.Default._tempHeapPtr;
ut.Core2D.layers.Default.StorageView._size = ut.Core2D.layers.Default._size;
ut.Core2D.layers.Default.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Default.StorageView.prototype, {
});
ut.Core2D.layers.Default._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Default is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Default._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Default._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Default', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Default, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Default.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Default.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Default._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Default.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Default.cid; } } });
ut.Core2D.layers.TransparentFX = function() {
};
ut.Core2D.layers.TransparentFX.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.prototype.constructor = ut.Core2D.layers.TransparentFX;
Object.defineProperties(ut.Core2D.layers.TransparentFX.prototype, {
});
ut.Core2D.layers.TransparentFX._size = 1;
ut.Core2D.layers.TransparentFX._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.TransparentFX.prototype);
  return v;
};
ut.Core2D.layers.TransparentFX._toPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.TransparentFX._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.TransparentFX._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.TransparentFX.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.TransparentFX.StorageView.prototype = Object.create(null);
ut.Core2D.layers.TransparentFX.StorageView.prototype.constructor = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX._view = ut.Core2D.layers.TransparentFX.StorageView;
ut.Core2D.layers.TransparentFX.StorageView._isSharedComp = ut.Core2D.layers.TransparentFX._isSharedComp = false;
ut.Core2D.layers.TransparentFX.StorageView._fromPtr = ut.Core2D.layers.TransparentFX._fromPtr;
ut.Core2D.layers.TransparentFX.StorageView._toPtr = ut.Core2D.layers.TransparentFX._toPtr;
ut.Core2D.layers.TransparentFX.StorageView._tempHeapPtr = ut.Core2D.layers.TransparentFX._tempHeapPtr;
ut.Core2D.layers.TransparentFX.StorageView._size = ut.Core2D.layers.TransparentFX._size;
ut.Core2D.layers.TransparentFX.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView.prototype, {
});
ut.Core2D.layers.TransparentFX._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.TransparentFX is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.TransparentFX._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.TransparentFX._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.TransparentFX', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.TransparentFX, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.TransparentFX.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.TransparentFX.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.TransparentFX._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.TransparentFX.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.TransparentFX.cid; } } });
ut.Core2D.layers.IgnoreRaycast = function() {
};
ut.Core2D.layers.IgnoreRaycast.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.prototype.constructor = ut.Core2D.layers.IgnoreRaycast;
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._size = 1;
ut.Core2D.layers.IgnoreRaycast._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.IgnoreRaycast.prototype);
  return v;
};
ut.Core2D.layers.IgnoreRaycast._toPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.IgnoreRaycast._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.IgnoreRaycast._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype = Object.create(null);
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.constructor = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast._view = ut.Core2D.layers.IgnoreRaycast.StorageView;
ut.Core2D.layers.IgnoreRaycast.StorageView._isSharedComp = ut.Core2D.layers.IgnoreRaycast._isSharedComp = false;
ut.Core2D.layers.IgnoreRaycast.StorageView._fromPtr = ut.Core2D.layers.IgnoreRaycast._fromPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._toPtr = ut.Core2D.layers.IgnoreRaycast._toPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._tempHeapPtr = ut.Core2D.layers.IgnoreRaycast._tempHeapPtr;
ut.Core2D.layers.IgnoreRaycast.StorageView._size = ut.Core2D.layers.IgnoreRaycast._size;
ut.Core2D.layers.IgnoreRaycast.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView.prototype, {
});
ut.Core2D.layers.IgnoreRaycast._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.IgnoreRaycast is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.IgnoreRaycast._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.IgnoreRaycast._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.IgnoreRaycast', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.IgnoreRaycast.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.IgnoreRaycast.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.IgnoreRaycast._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.IgnoreRaycast.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.IgnoreRaycast.cid; } } });
ut.Core2D.layers.Water = function() {
};
ut.Core2D.layers.Water.prototype = Object.create(null);
ut.Core2D.layers.Water.prototype.constructor = ut.Core2D.layers.Water;
Object.defineProperties(ut.Core2D.layers.Water.prototype, {
});
ut.Core2D.layers.Water._size = 1;
ut.Core2D.layers.Water._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Water.prototype);
  return v;
};
ut.Core2D.layers.Water._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Water._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Water._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Water.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Water.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Water.StorageView.prototype.constructor = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water._view = ut.Core2D.layers.Water.StorageView;
ut.Core2D.layers.Water.StorageView._isSharedComp = ut.Core2D.layers.Water._isSharedComp = false;
ut.Core2D.layers.Water.StorageView._fromPtr = ut.Core2D.layers.Water._fromPtr;
ut.Core2D.layers.Water.StorageView._toPtr = ut.Core2D.layers.Water._toPtr;
ut.Core2D.layers.Water.StorageView._tempHeapPtr = ut.Core2D.layers.Water._tempHeapPtr;
ut.Core2D.layers.Water.StorageView._size = ut.Core2D.layers.Water._size;
ut.Core2D.layers.Water.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Water.StorageView.prototype, {
});
ut.Core2D.layers.Water._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Water is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Water._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Water._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Water', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Water, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Water.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Water.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Water._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Water.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Water.cid; } } });
ut.Core2D.layers.UI = function() {
};
ut.Core2D.layers.UI.prototype = Object.create(null);
ut.Core2D.layers.UI.prototype.constructor = ut.Core2D.layers.UI;
Object.defineProperties(ut.Core2D.layers.UI.prototype, {
});
ut.Core2D.layers.UI._size = 1;
ut.Core2D.layers.UI._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.UI.prototype);
  return v;
};
ut.Core2D.layers.UI._toPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.UI._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.UI._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.UI.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.UI.StorageView.prototype = Object.create(null);
ut.Core2D.layers.UI.StorageView.prototype.constructor = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI._view = ut.Core2D.layers.UI.StorageView;
ut.Core2D.layers.UI.StorageView._isSharedComp = ut.Core2D.layers.UI._isSharedComp = false;
ut.Core2D.layers.UI.StorageView._fromPtr = ut.Core2D.layers.UI._fromPtr;
ut.Core2D.layers.UI.StorageView._toPtr = ut.Core2D.layers.UI._toPtr;
ut.Core2D.layers.UI.StorageView._tempHeapPtr = ut.Core2D.layers.UI._tempHeapPtr;
ut.Core2D.layers.UI.StorageView._size = ut.Core2D.layers.UI._size;
ut.Core2D.layers.UI.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.UI.StorageView.prototype, {
});
ut.Core2D.layers.UI._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.UI is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.UI._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.UI._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.UI', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.UI, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.UI.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.UI.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.UI._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.UI.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.UI.cid; } } });
ut.Core2D.layers.Grid = function() {
};
ut.Core2D.layers.Grid.prototype = Object.create(null);
ut.Core2D.layers.Grid.prototype.constructor = ut.Core2D.layers.Grid;
Object.defineProperties(ut.Core2D.layers.Grid.prototype, {
});
ut.Core2D.layers.Grid._size = 1;
ut.Core2D.layers.Grid._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Grid.prototype);
  return v;
};
ut.Core2D.layers.Grid._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Grid._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Grid._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Grid.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Grid.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Grid.StorageView.prototype.constructor = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid._view = ut.Core2D.layers.Grid.StorageView;
ut.Core2D.layers.Grid.StorageView._isSharedComp = ut.Core2D.layers.Grid._isSharedComp = false;
ut.Core2D.layers.Grid.StorageView._fromPtr = ut.Core2D.layers.Grid._fromPtr;
ut.Core2D.layers.Grid.StorageView._toPtr = ut.Core2D.layers.Grid._toPtr;
ut.Core2D.layers.Grid.StorageView._tempHeapPtr = ut.Core2D.layers.Grid._tempHeapPtr;
ut.Core2D.layers.Grid.StorageView._size = ut.Core2D.layers.Grid._size;
ut.Core2D.layers.Grid.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Grid.StorageView.prototype, {
});
ut.Core2D.layers.Grid._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Grid is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Grid._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Grid._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Grid', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Grid, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Grid.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Grid.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Grid._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Grid.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Grid.cid; } } });
ut.Core2D.layers.Cutscene = function() {
};
ut.Core2D.layers.Cutscene.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.prototype.constructor = ut.Core2D.layers.Cutscene;
Object.defineProperties(ut.Core2D.layers.Cutscene.prototype, {
});
ut.Core2D.layers.Cutscene._size = 1;
ut.Core2D.layers.Cutscene._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.Core2D.layers.Cutscene.prototype);
  return v;
};
ut.Core2D.layers.Cutscene._toPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._toTempHeapPtr = function(ptr, v) {
};
ut.Core2D.layers.Cutscene._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(1);
  if (v) ut.Core2D.layers.Cutscene._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.Core2D.layers.Cutscene.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.Core2D.layers.Cutscene.StorageView.prototype = Object.create(null);
ut.Core2D.layers.Cutscene.StorageView.prototype.constructor = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene._view = ut.Core2D.layers.Cutscene.StorageView;
ut.Core2D.layers.Cutscene.StorageView._isSharedComp = ut.Core2D.layers.Cutscene._isSharedComp = false;
ut.Core2D.layers.Cutscene.StorageView._fromPtr = ut.Core2D.layers.Cutscene._fromPtr;
ut.Core2D.layers.Cutscene.StorageView._toPtr = ut.Core2D.layers.Cutscene._toPtr;
ut.Core2D.layers.Cutscene.StorageView._tempHeapPtr = ut.Core2D.layers.Cutscene._tempHeapPtr;
ut.Core2D.layers.Cutscene.StorageView._size = ut.Core2D.layers.Cutscene._size;
ut.Core2D.layers.Cutscene.StorageView.prototype.$advance = function() {
  this._ptr += 1;
};
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView.prototype, {
});
ut.Core2D.layers.Cutscene._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.Core2D.layers.Cutscene is a POD type, so a JavaScript side copy constructor ut.Core2D.layers.Cutscene._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.Core2D.layers.Cutscene._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.Core2D.layers.Cutscene', 1, []);
})();
Object.defineProperties(ut.Core2D.layers.Cutscene, { cid: { configurable: true, get: function() { delete ut.Core2D.layers.Cutscene.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.Core2D.layers.Cutscene.cid = Module._ut_component_register_cid_with_type(ut.Core2D.layers.Cutscene._typeDesc, 0, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.Core2D.layers.Cutscene.StorageView, { cid: { configurable: true, get: function() { return ut.Core2D.layers.Cutscene.cid; } } });
ut.EditorExtensions = ut.EditorExtensions || {};
ut.EditorExtensions.AssetReferenceAnimationClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAnimationClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._size = 24;
ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAnimationClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAnimationClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip._view = ut.EditorExtensions.AssetReferenceAnimationClip.StorageView;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAnimationClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAnimationClip._fromPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAnimationClip._toPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAnimationClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView._size = ut.EditorExtensions.AssetReferenceAnimationClip._size;
ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAnimationClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAnimationClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAnimationClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAnimationClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAnimationClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAnimationClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAnimationClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAnimationClip.cid; } } });
ut.EditorExtensions.AssetReferenceAnimationClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAnimationClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAnimationClip };
ut.EditorExtensions.AssetReferenceAudioClip = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceAudioClip.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip;
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._size = 24;
ut.EditorExtensions.AssetReferenceAudioClip._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceAudioClip.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceAudioClip._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceAudioClip._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip._view = ut.EditorExtensions.AssetReferenceAudioClip.StorageView;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceAudioClip._isSharedComp = false;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceAudioClip._fromPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._toPtr = ut.EditorExtensions.AssetReferenceAudioClip._toPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceAudioClip._tempHeapPtr;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView._size = ut.EditorExtensions.AssetReferenceAudioClip._size;
ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceAudioClip._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceAudioClip._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceAudioClip._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceAudioClip', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceAudioClip.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceAudioClip.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceAudioClip._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceAudioClip._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceAudioClip.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceAudioClip.cid; } } });
ut.EditorExtensions.AssetReferenceAudioClip.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceAudioClip.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceAudioClip };
ut.EditorExtensions.AssetReferenceSprite = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSprite.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSprite._size = 24;
ut.EditorExtensions.AssetReferenceSprite._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSprite.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSprite._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSprite._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite._view = ut.EditorExtensions.AssetReferenceSprite.StorageView;
ut.EditorExtensions.AssetReferenceSprite.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSprite._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSprite.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSprite._fromPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSprite._toPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSprite._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSprite.StorageView._size = ut.EditorExtensions.AssetReferenceSprite._size;
ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSprite._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSprite._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSprite._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSprite', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSprite.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSprite.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSprite._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSprite._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSprite.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSprite.cid; } } });
ut.EditorExtensions.AssetReferenceSprite.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSprite.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSprite };
ut.EditorExtensions.AssetReferenceSpriteAtlas = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas;
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._size = 24;
ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceSpriteAtlas.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceSpriteAtlas._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas._view = ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceSpriteAtlas._isSharedComp = false;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._fromPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._toPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._toPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceSpriteAtlas._tempHeapPtr;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView._size = ut.EditorExtensions.AssetReferenceSpriteAtlas._size;
ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceSpriteAtlas', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceSpriteAtlas._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceSpriteAtlas._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceSpriteAtlas.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceSpriteAtlas.cid; } } });
ut.EditorExtensions.AssetReferenceSpriteAtlas.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceSpriteAtlas.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceSpriteAtlas };
ut.EditorExtensions.AssetReferenceTexture2D = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTexture2D.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._size = 24;
ut.EditorExtensions.AssetReferenceTexture2D._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTexture2D.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTexture2D._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTexture2D._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D._view = ut.EditorExtensions.AssetReferenceTexture2D.StorageView;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTexture2D._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTexture2D._fromPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTexture2D._toPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTexture2D._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView._size = ut.EditorExtensions.AssetReferenceTexture2D._size;
ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTexture2D._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTexture2D._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTexture2D._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTexture2D', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTexture2D.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTexture2D.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTexture2D._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTexture2D._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTexture2D.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTexture2D.cid; } } });
ut.EditorExtensions.AssetReferenceTexture2D.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTexture2D.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTexture2D };
ut.EditorExtensions.AssetReferenceTileBase = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTileBase.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._size = 24;
ut.EditorExtensions.AssetReferenceTileBase._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTileBase.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTileBase._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTileBase._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase._view = ut.EditorExtensions.AssetReferenceTileBase.StorageView;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTileBase._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTileBase._fromPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTileBase._toPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTileBase._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTileBase.StorageView._size = ut.EditorExtensions.AssetReferenceTileBase._size;
ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTileBase._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTileBase._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTileBase._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTileBase', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTileBase.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTileBase.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTileBase._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTileBase._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTileBase.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTileBase.cid; } } });
ut.EditorExtensions.AssetReferenceTileBase.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTileBase.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTileBase };
ut.EditorExtensions.AssetReferenceTMP_FontAsset = function(arg0, arg1, arg2) {
  this._guid = (arg0 === undefined ? '' : arg0);
  this._fileId = (/*64BIT*/arg1|0);
  this._type = (arg2|0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset;
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype, {
  guid: {
    get: function() { return this._guid; },
    set: function(v) { this._guid = (v === undefined ? '' : v); },
  },
  fileId: {
    get: function() { return this._fileId; },
    set: function(v) { this._fileId = (/*64BIT*/v|0); },
  },
  type: {
    get: function() { return this._type; },
    set: function(v) { this._type = (v|0); },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._size = 24;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.AssetReferenceTMP_FontAsset.prototype);
  v._guid = (Module._ut_nativestring_data(ptr+0) ? UTF8ToString(Module._ut_nativestring_data(ptr+0)) : "");
  v._fileId = (/*64BIT*/HEAP32[(ptr+8)>>2]);
  v._type = HEAP32[(ptr+16)>>2];
  return v;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr = function(ptr, v) {
  ut.newHeapNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr = function(ptr, v) {
  ut.toExistingScratchNativeString(ptr+0, v.guid);
  HEAP32[(ptr+8)>>2] = /*64BIT*/v.fileId;
  HEAP32[(ptr+16)>>2] = v.type;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(24);
  if (v) ut.EditorExtensions.AssetReferenceTMP_FontAsset._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype = Object.create(null);
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.constructor = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset._view = ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._isSharedComp = ut.EditorExtensions.AssetReferenceTMP_FontAsset._isSharedComp = false;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._fromPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._fromPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._toPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._toPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._tempHeapPtr = ut.EditorExtensions.AssetReferenceTMP_FontAsset._tempHeapPtr;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView._size = ut.EditorExtensions.AssetReferenceTMP_FontAsset._size;
ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype.$advance = function() {
  this._ptr += 24;
};
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView.prototype, {
  guid: {
    get: function() { return (Module._ut_nativestring_data(this._ptr+0) ? UTF8ToString(Module._ut_nativestring_data(this._ptr+0)) : ""); },
    set: function(v) { ut.newHeapNativeString(this._ptr+0, v); },
  },
  fileId: {
    get: function() { return (/*64BIT*/HEAP32[(this._ptr+8)>>2]); },
    set: function(v) { HEAP32[(this._ptr+8)>>2] = /*64BIT*/v; },
  },
  type: {
    get: function() { return HEAP32[(this._ptr+16)>>2]; },
    set: function(v) { HEAP32[(this._ptr+16)>>2] = v; },
  },
});
ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn = function dtor(ptr) {
  if (!ptr) return; 
  Module._ut_nativestring_placement_delete(ptr + 0);
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn = function copy(src, dst) {
  if (!src) throw 'copy function src ptr is null!';
  if (!dst) throw 'copy function dst ptr is null!';
  Module._ut_nativestring_copy_construct(dst + 0, src + 0);
  for(var i = 0; i < 8; ++i) HEAPU8[dst+8+i] = HEAPU8[src+8+i];
  for(var i = 0; i < 4; ++i) HEAPU8[dst+16+i] = HEAPU8[src+16+i];
};
ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.AssetReferenceTMP_FontAsset', 24, [
    {name: 'guid', offset: 0, type: ut.meta.getType('string')},
    {name: 'fileId', offset: 8, type: ut.meta.getType('int64')},
    {name: 'type', offset: 16, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.AssetReferenceTMP_FontAsset._typeDesc, 8, 0, offsetsPtr, offsetsCount, ut.DestructorFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._dtorFn), ut.CopyFn._cb.token_for(ut.EditorExtensions.AssetReferenceTMP_FontAsset._copyFn)); } } });
Object.defineProperties(ut.EditorExtensions.AssetReferenceTMP_FontAsset.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.AssetReferenceTMP_FontAsset.cid; } } });
ut.EditorExtensions.AssetReferenceTMP_FontAsset.guid = { $ofs:0, $t:"System.String", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.fileId = { $ofs:8, $t:"System.Int64", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.AssetReferenceTMP_FontAsset.type = { $ofs:16, $t:"int32_t", $c:ut.EditorExtensions.AssetReferenceTMP_FontAsset };
ut.EditorExtensions.CameraCullingMask = function(arg0) {
  this._mask = (arg0|0);
};
ut.EditorExtensions.CameraCullingMask.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.prototype.constructor = ut.EditorExtensions.CameraCullingMask;
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.prototype, {
  mask: {
    get: function() { return this._mask; },
    set: function(v) { this._mask = (v|0); },
  },
});
ut.EditorExtensions.CameraCullingMask._size = 4;
ut.EditorExtensions.CameraCullingMask._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.CameraCullingMask.prototype);
  v._mask = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.CameraCullingMask._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.mask;
};
ut.EditorExtensions.CameraCullingMask._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.CameraCullingMask._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.CameraCullingMask.StorageView.prototype = Object.create(null);
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.constructor = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask._view = ut.EditorExtensions.CameraCullingMask.StorageView;
ut.EditorExtensions.CameraCullingMask.StorageView._isSharedComp = ut.EditorExtensions.CameraCullingMask._isSharedComp = false;
ut.EditorExtensions.CameraCullingMask.StorageView._fromPtr = ut.EditorExtensions.CameraCullingMask._fromPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._toPtr = ut.EditorExtensions.CameraCullingMask._toPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._tempHeapPtr = ut.EditorExtensions.CameraCullingMask._tempHeapPtr;
ut.EditorExtensions.CameraCullingMask.StorageView._size = ut.EditorExtensions.CameraCullingMask._size;
ut.EditorExtensions.CameraCullingMask.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView.prototype, {
  mask: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.CameraCullingMask._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.CameraCullingMask is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.CameraCullingMask._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.CameraCullingMask._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.CameraCullingMask', 4, [
    {name: 'mask', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.CameraCullingMask, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.CameraCullingMask.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.CameraCullingMask.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.CameraCullingMask._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.CameraCullingMask.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.CameraCullingMask.cid; } } });
ut.EditorExtensions.CameraCullingMask.mask = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.CameraCullingMask };
ut.EditorExtensions.EntityLayer = function(arg0) {
  this._layer = (arg0|0);
};
ut.EditorExtensions.EntityLayer.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.prototype.constructor = ut.EditorExtensions.EntityLayer;
Object.defineProperties(ut.EditorExtensions.EntityLayer.prototype, {
  layer: {
    get: function() { return this._layer; },
    set: function(v) { this._layer = (v|0); },
  },
});
ut.EditorExtensions.EntityLayer._size = 4;
ut.EditorExtensions.EntityLayer._fromPtr = function(ptr, v) {
  v = v || Object.create(ut.EditorExtensions.EntityLayer.prototype);
  v._layer = HEAP32[(ptr+0)>>2];
  return v;
};
ut.EditorExtensions.EntityLayer._toPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._toTempHeapPtr = function(ptr, v) {
  HEAP32[(ptr+0)>>2] = v.layer;
};
ut.EditorExtensions.EntityLayer._tempHeapPtr = function(v) {
  var ptr = ut.tempHeapPtrBufferZero(4);
  if (v) ut.EditorExtensions.EntityLayer._toTempHeapPtr(ptr, v);
  return ptr;
};
ut.EditorExtensions.EntityLayer.StorageView = function(ptr) {
  this._ptr = ptr;
};
ut.EditorExtensions.EntityLayer.StorageView.prototype = Object.create(null);
ut.EditorExtensions.EntityLayer.StorageView.prototype.constructor = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer._view = ut.EditorExtensions.EntityLayer.StorageView;
ut.EditorExtensions.EntityLayer.StorageView._isSharedComp = ut.EditorExtensions.EntityLayer._isSharedComp = false;
ut.EditorExtensions.EntityLayer.StorageView._fromPtr = ut.EditorExtensions.EntityLayer._fromPtr;
ut.EditorExtensions.EntityLayer.StorageView._toPtr = ut.EditorExtensions.EntityLayer._toPtr;
ut.EditorExtensions.EntityLayer.StorageView._tempHeapPtr = ut.EditorExtensions.EntityLayer._tempHeapPtr;
ut.EditorExtensions.EntityLayer.StorageView._size = ut.EditorExtensions.EntityLayer._size;
ut.EditorExtensions.EntityLayer.StorageView.prototype.$advance = function() {
  this._ptr += 4;
};
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView.prototype, {
  layer: {
    get: function() { return HEAP32[(this._ptr+0)>>2]; },
    set: function(v) { HEAP32[(this._ptr+0)>>2] = v; },
  },
});
ut.EditorExtensions.EntityLayer._dtorFn = function dtor(ptr) { /* POD, no-op */ }
// ut.EditorExtensions.EntityLayer is a POD type, so a JavaScript side copy constructor ut.EditorExtensions.EntityLayer._copyFn = function copy(src, dst) { ... } does not need to be generated for it
ut.EditorExtensions.EntityLayer._typeDesc = (function() {
  return ut.meta.allocType(5, 'ut.EditorExtensions.EntityLayer', 4, [
    {name: 'layer', offset: 0, type: ut.meta.getType('int32')}
  ]);
})();
Object.defineProperties(ut.EditorExtensions.EntityLayer, { cid: { configurable: true, get: function() { delete ut.EditorExtensions.EntityLayer.cid; var offsetsPtr = 0, offsetsCount = 0; return ut.EditorExtensions.EntityLayer.cid = Module._ut_component_register_cid_with_type(ut.EditorExtensions.EntityLayer._typeDesc, 4, 0, offsetsPtr, offsetsCount, 0, 0); } } });
Object.defineProperties(ut.EditorExtensions.EntityLayer.StorageView, { cid: { configurable: true, get: function() { return ut.EditorExtensions.EntityLayer.cid; } } });
ut.EditorExtensions.EntityLayer.layer = { $ofs:0, $t:"int32_t", $c:ut.EditorExtensions.EntityLayer };
game.MainStartJS = ut.System.define({
  name: "game.MainStartJS"
});
game.SelectingCardJS = ut.System.define({
  name: "game.SelectingCardJS"
});



