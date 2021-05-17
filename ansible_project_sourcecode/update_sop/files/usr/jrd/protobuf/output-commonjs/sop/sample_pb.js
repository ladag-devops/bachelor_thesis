/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.SopSample.Data', null, global);
goog.exportSymbol('proto.SopSample.DataArray', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SopSample.Data = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SopSample.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SopSample.Data.displayName = 'proto.SopSample.Data';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SopSample.Data.prototype.toObject = function(opt_includeInstance) {
  return proto.SopSample.Data.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SopSample.Data} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SopSample.Data.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: msg.getUuid(),
    timestamp: msg.getTimestamp(),
    rssi: msg.getRssi(),
    packetCounter: msg.getPacketCounter(),
    configNumber: msg.getConfigNumber(),
    batteryVoltage: msg.getBatteryVoltage(),
    temperatureInternal: msg.getTemperatureInternal(),
    temperature: msg.getTemperature(),
    capacitance: msg.getCapacitance(),
    acceleration: msg.getAcceleration(),
    restartsUnknown: msg.getRestartsUnknown(),
    restartsSoftware: msg.getRestartsSoftware(),
    restartsWatchdog: msg.getRestartsWatchdog(),
    errors: msg.getErrors()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SopSample.Data}
 */
proto.SopSample.Data.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SopSample.Data;
  return proto.SopSample.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SopSample.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SopSample.Data}
 */
proto.SopSample.Data.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readSint32());
      msg.setRssi(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPacketCounter(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setConfigNumber(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBatteryVoltage(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperatureInternal(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTemperature(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCapacitance(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAcceleration(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartsUnknown(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartsSoftware(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setRestartsWatchdog(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SopSample.Data} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SopSample.Data.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SopSample.Data.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SopSample.Data.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = this.getRssi();
  if (f !== 0) {
    writer.writeSint32(
      3,
      f
    );
  }
  f = this.getPacketCounter();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = this.getConfigNumber();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = this.getBatteryVoltage();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = this.getTemperatureInternal();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = this.getTemperature();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = this.getCapacitance();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = this.getAcceleration();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = this.getRestartsUnknown();
  if (f !== 0) {
    writer.writeUint32(
      11,
      f
    );
  }
  f = this.getRestartsSoftware();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = this.getRestartsWatchdog();
  if (f !== 0) {
    writer.writeUint32(
      13,
      f
    );
  }
  f = this.getErrors();
  if (f !== 0) {
    writer.writeUint32(
      14,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SopSample.Data} The clone.
 */
proto.SopSample.Data.prototype.cloneMessage = function() {
  return /** @type {!proto.SopSample.Data} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.SopSample.Data.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
proto.SopSample.Data.prototype.setUuid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 timestamp = 2;
 * @return {number}
 */
proto.SopSample.Data.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 2, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional sint32 rssi = 3;
 * @return {number}
 */
proto.SopSample.Data.prototype.getRssi = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setRssi = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint32 packet_counter = 4;
 * @return {number}
 */
proto.SopSample.Data.prototype.getPacketCounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setPacketCounter = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint32 config_number = 5;
 * @return {number}
 */
proto.SopSample.Data.prototype.getConfigNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 5, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setConfigNumber = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional float battery_voltage = 6;
 * @return {number}
 */
proto.SopSample.Data.prototype.getBatteryVoltage = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setBatteryVoltage = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional float temperature_internal = 7;
 * @return {number}
 */
proto.SopSample.Data.prototype.getTemperatureInternal = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 7, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setTemperatureInternal = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional float temperature = 8;
 * @return {number}
 */
proto.SopSample.Data.prototype.getTemperature = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 8, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setTemperature = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional float capacitance = 9;
 * @return {number}
 */
proto.SopSample.Data.prototype.getCapacitance = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 9, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setCapacitance = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional float acceleration = 10;
 * @return {number}
 */
proto.SopSample.Data.prototype.getAcceleration = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 10, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setAcceleration = function(value) {
  jspb.Message.setField(this, 10, value);
};


/**
 * optional uint32 restarts_unknown = 11;
 * @return {number}
 */
proto.SopSample.Data.prototype.getRestartsUnknown = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 11, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setRestartsUnknown = function(value) {
  jspb.Message.setField(this, 11, value);
};


/**
 * optional uint32 restarts_software = 12;
 * @return {number}
 */
proto.SopSample.Data.prototype.getRestartsSoftware = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 12, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setRestartsSoftware = function(value) {
  jspb.Message.setField(this, 12, value);
};


/**
 * optional uint32 restarts_watchdog = 13;
 * @return {number}
 */
proto.SopSample.Data.prototype.getRestartsWatchdog = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 13, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setRestartsWatchdog = function(value) {
  jspb.Message.setField(this, 13, value);
};


/**
 * optional uint32 errors = 14;
 * @return {number}
 */
proto.SopSample.Data.prototype.getErrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 14, 0));
};


/** @param {number} value  */
proto.SopSample.Data.prototype.setErrors = function(value) {
  jspb.Message.setField(this, 14, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SopSample.DataArray = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.SopSample.DataArray.repeatedFields_, null);
};
goog.inherits(proto.SopSample.DataArray, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.SopSample.DataArray.displayName = 'proto.SopSample.DataArray';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.SopSample.DataArray.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SopSample.DataArray.prototype.toObject = function(opt_includeInstance) {
  return proto.SopSample.DataArray.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SopSample.DataArray} msg The msg instance to transform.
 * @return {!Object}
 */
proto.SopSample.DataArray.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplesList: jspb.Message.toObjectList(msg.getSamplesList(),
    proto.SopSample.Data.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SopSample.DataArray}
 */
proto.SopSample.DataArray.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SopSample.DataArray;
  return proto.SopSample.DataArray.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SopSample.DataArray} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SopSample.DataArray}
 */
proto.SopSample.DataArray.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.SopSample.Data;
      reader.readMessage(value,proto.SopSample.Data.deserializeBinaryFromReader);
      msg.getSamplesList().push(value);
      msg.setSamplesList(msg.getSamplesList());
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!proto.SopSample.DataArray} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.SopSample.DataArray.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SopSample.DataArray.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
proto.SopSample.DataArray.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getSamplesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.SopSample.Data.serializeBinaryToWriter
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.SopSample.DataArray} The clone.
 */
proto.SopSample.DataArray.prototype.cloneMessage = function() {
  return /** @type {!proto.SopSample.DataArray} */ (jspb.Message.cloneMessage(this));
};


/**
 * repeated Data samples = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.SopSample.Data>}
 */
proto.SopSample.DataArray.prototype.getSamplesList = function() {
  return /** @type{!Array.<!proto.SopSample.Data>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SopSample.Data, 1));
};


/** @param {Array.<!proto.SopSample.Data>} value  */
proto.SopSample.DataArray.prototype.setSamplesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


proto.SopSample.DataArray.prototype.clearSamplesList = function() {
  this.setSamplesList([]);
};


goog.object.extend(exports, proto.SopSample);