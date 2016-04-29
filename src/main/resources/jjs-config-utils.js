var env = Java.type("java.lang.System").getenv;
var uri = Java.type("java.net.URI").create;
var system = Java.type("java.lang.System");
var duration = Java.type("java.time.Duration");

/** To store private vars. */
var konf = {
  osNameInternal : system.getProperty("os.name").toLowerCase()
};

function dockerHostOrDefault(defaultHost) {
  var dockerHost = env("DOCKER_HOST");
  return dockerHost ? uri(dockerHost).getHost() : defaultHost;
}

function seconds(unit) {
  return duration.ofSeconds(unit);
}

function minutes(unit) {
  return duration.ofMinutes(unit);
}

function hours(unit) {
  return duration.ofHours(unit);
}

function days(unit) {
  return duration.ofDays(unit);
}


function millis(unit) {
  return duration.ofMillis(unit);
}


function milliseconds(unit) {
  return duration.ofMillis(unit);
}

function sysProp(prop) {
  return system.getProperty(prop);
}

function sysPropOrDefault(prop, defaultValue) {
  return system.getProperty(prop, defaultValue.toString());
}

function isWindowsOS() {
  return (konf.osNameInternal.indexOf("win") >= 0);
}

function isMacOS() {
  return (konf.osNameInternal.indexOf("mac") >= 0);
}

function isUnix() {
  var OS = konf.osNameInternal;
  return (OS.indexOf("nix") >= 0 || OS.indexOf("nux") >= 0 || OS.indexOf("aix") > 0 );
}


function isLinux() {
  return konf.osNameInternal.indexOf("linux") >= 0;
}


function  isSolaris() {
  return (konf.osNameInternal.indexOf("sunos") >= 0);
}