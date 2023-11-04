export { }
declare global {
  type Store = Record<string, unknown>
  var store: Store

  type TimeMoment = 'live' | 'solarNoon' | 'nadir' | 'goldenHourDawnStart' | 'goldenHourDawnEnd' | 'goldenHourDuskStart' | 'goldenHourDuskEnd' | 'sunriseStart' | 'sunriseEnd' | 'sunsetStart' | 'sunsetEnd' | 'blueHourDawnStart' | 'blueHourDawnEnd' | 'blueHourDuskStart' | 'blueHourDuskEnd' | 'civilDawn' | 'civilDusk' | 'nauticalDawn' | 'nauticalDusk' | 'amatureDawn' | 'amatureDusk' | 'astronomicalDawn' | 'astronomicalDusk'

  interface MsfsPanel {
    __Type: string
    icon: string
    childDetached: boolean
    buttonVisible: boolean
    childActive: boolean
    managedByToolbar: boolean
    nbNotifications: number
    newNotification: boolean
    name: string
    ID: string
    disabled: boolean
    shortcut: string
    order: number
  }

  interface MsfsServer {
    __Type: string
    ID: string
    name: string
    ping: number
    pingUnit: string
  }

  type MsfsServerID = 'Auto' | 'WestEurope' | 'NorthEurope' | 'EastUs' | 'WestUs' | 'SoutheastAsia'

  interface AirportFrequency {
    __Type: string
    name: string
    freqMHz: number
    freqBCD16: number
    type: number
    icao: string
  }
  interface AirportGate {
    __Type: string
    name: number
    number: number
    suffix: number
    latitude: number
    longitude: number
    designation: string
  }
  interface AirportILSFrequency {
    __Type: string
    name: string
    freqMHz: number
    freqBCD16: number
    type: number
    icao: string
    hasGlideslope: string
    glideslopeAngle: string
    localizerCourse: string
    magvar: string
  }

  interface AirportRunway {
    __Type: string
    latitude: number
    longitude: number
    elevation: number
    direction: number
    designation: string
    length: number
    width: number
    surface: number
    lighting: number
    designatorCharPrimary: number
    designatorCharSecondary: number
    primaryILSFrequency: AirportILSFrequency
    secondaryILSFrequency: AirportILSFrequency
    primaryElevation: number
    primaryThresholdLength: number
    secondaryElevation: number
    secondaryThresholdLength: number
    primaryName: string
    secondaryName: string
  }

  interface AirportProcedureLeg {
    __Type: string
    type: number
    fixIcao: string
    flyOver: boolean
    distanceMinutes: boolean
    trueDegrees: boolean
    turnDirection: number
    originIcao: string
    arcCenterFixIcao: string
    theta: number
    rho: number
    course: number
    distance: number
    speedRestriction: number
    altDesc: number
    altitude1: number
    altitude2: number
    fixTypeFlags: number
    verticalAngle: number
  }
  interface AirportRunwayTransition {
    __Type: string
    runwayNumber: number
    runwayDesignation: number
    legs: AirportProcedureLeg[]
  }
  interface AirportEnrouteTransition {
    __Type: string
    name: string
    legs: AirportProcedureLeg[]
  }
  interface AirportApproachTransition {
    __Type: string
    name: string
    legs: AirportProcedureLeg[]
  }
  interface AirportDeparture {
    __Type: string
    name: string
    runwayTransitions: AirportRunwayTransition[]
    commonLegs: unknown[],
    enRouteTransitions: AirportEnrouteTransition[]
  }

  interface AirportApproach {
    __Type: string
    name: string
    runway: string
    icaos: unknown[]
    transitions: AirportApproachTransition[]
    approachType: number
    approachSuffix: string
    runwayNumber: number
    runwayDesignator: number
    rnavTypeFlags: number
    finalLegs: AirportProcedureLeg[]
    missedLegs: AirportProcedureLeg[]
  }

  interface AirportArrival {
    __Type: string
    name: string
    runwayTransitions: AirportRunwayTransition[]
    commonLegs: unknown[]
    enRouteTransitions: AirportEnrouteTransition[]
  }

  interface Airport {
    __Type: string
    icao: string
    name: string
    lat: number
    lon: number
    altitude: number
    region: string
    city: string
    airportPrivateType: number
    fuel1: string
    fuel2: string
    bestApproach: string
    radarCoverage: number
    airspaceType: number
    airportClass: number
    towered: boolean
    metar: unknown
    frequencies: AirportFrequency[]
    gates: AirportGate[]
    runways: AirportRunway[]
  }

  interface WeatherRangeDataValue {
    __Type: string
    ID: number
    icon: string
    name: string
    valueStr: string
    value: number
    type: string
    unit: string
    quality: number
    html: string
    userTag: number
    min: number
    max: number
    step: number
    clamp_min: number
    clamp_max: number
    percent: number
  }
  interface WeatherDataValue {
    __Type: string
    ID: number
    icon: string
    name: string
    valueStr: string
    value: number
    type: string
    unit: string
    quality: number
    html: string
    userTag: number
  }

  interface WeatherGustWaveData {
    __Type: string;
    dvAngleRad: WeatherRangeDataValue;
    dvIntervalS: WeatherRangeDataValue;
    dvSpeedMultiplier: WeatherRangeDataValue;
  }

  interface WeatherWindLayerData {
    __Type: string;
    dvAltitude: WeatherRangeDataValue;
    dvAngleRad: WeatherRangeDataValue;
    dvSpeed: WeatherRangeDataValue;
    gustWaveData: WeatherGustWaveData;
  }

  interface WeatherCloudLayer {
    __Type: string
    dvDensityMultiplier: WeatherRangeDataValue
    dvCoverageRatio: WeatherRangeDataValue
    dvCloudScatteringRatio: WeatherRangeDataValue
    dvAltitudeBot: WeatherRangeDataValue
    dvAltitudeTop: WeatherRangeDataValue
  }
  interface WeatherPresetSettings {
    __Type: string
    dvPrecipitation: WeatherRangeDataValue
    dvMSLPressure: WeatherRangeDataValue
    dvMSLGLTemperature: WeatherRangeDataValue
    dvPollution: WeatherRangeDataValue
    dvSnowCover: WeatherRangeDataValue
    dvHumidityMultiplier: WeatherRangeDataValue
    dvThunderstormRatio: WeatherRangeDataValue
    bIsAltitudeAMGL: boolean
  }
  interface WeatherPresetConfig {
    __Type: string
    dvMinAltitude: WeatherDataValue
    dvMaxAltitude: WeatherDataValue
    daDvAltitudeLines: WeatherDataValue[]
    dvMinCloudHeight: WeatherDataValue
    dvMaxWindSpeed: WeatherDataValue
    fMaxGustSpeedRatio: number
    fMinGustSpeedRatio: number
  }
  interface WeatherPreset {
    __Type: string
    index: number
    sPresetName: string
    bIsValid: boolean
    bIsRemovable: boolean
    tCloudLayers: WeatherCloudLayer[]
    tWindLayers: WeatherWindLayerData[]
    oSettings: WeatherPresetSettings
    oConfig: WeatherPresetConfig
  }
  interface WeatherData {
    __Type: string
    index: number
    locked: boolean
    name: string
    category: string
    icon: string
    pressure: number
    weatherImage: string
    weatherImageLayered: string
    live: boolean
    wind: string
    visibility: string
  }
  interface WeatherMetar {
    __Type: string
    altimeterQ: number
    cavok: boolean
    day: number
    dew: number
    fdew: number
    ftemp: number
    hour: number
    icao: string
    layers: unknown[],
    maxWindDir: number
    messageType: number
    metarString: string
    min: number
    minWindDir: number
    phenomena: unknown[],
    rmk: boolean
    temp: number
    tempO: boolean
    vis: unknown
    visLt: boolean
    visUnits: number
    vrb: boolean
    windDir: number
    windSpeed: number
    windSpeedUnits: number
    windSpeedUnitString: string
  }

  interface SunPosition {
    azimuth: number
    altitude: number
    zenith: number
    azimuthDegrees: number
    altitudeDegrees: number
    zenithDegrees: number
    declination: number
    at: number
  }

  type SimSettingListItem = {
    id: SettingsSelectId | SettingsRangeId
    title: string
    mode?: "PC" | "VR"
    choices?: [string, string][]
    min?: number
    max?: number
    step?: number
    is_percent?: boolean
  }

  type SimSettingSingleItem = {
    id: SettingsRangeId | SettingsSelectId
    description: string
    value: number
  } & ({
    type: "select"
    choices: { title: string, value: string }[]
  } | {
    type: "range"
    min: number
    max: number
    step: number
    is_percent: boolean
  })

  type AllSimSettings = {
    sim_version: string
    sim_settings: SimSettingListItem[]
  }

  var $api: {
    variables: {
      get: <T>(name: string, type: string) => T
      set: (name: string, type: string, value: number) => void
    }
    command: {
      get_active_pause: () => boolean
      set_active_pause: (state: boolean) => void
      open_browser: (url: string) => void
      copy_text: (text: string) => void
      open_search: (query: string) => void
      script_message_send: (reference_name: string, message: unknown, callback: (response: unknown) => void) => void
      script_run: (reference_name: string) => void
      get_wheel_location: () => [number, number]
      get_wheel_state: () => boolean
      get_otto_state: () => boolean
      get_sim_settings: () => AllSimSettings
      get_sim_setting: (id: SettingsSelectId | SettingsRangeId) => SimSettingSingleItem
      set_sim_setting_select: (id: SettingsSelectId, index: SettingsSelect) => void
      set_sim_setting_range: (id: SettingsRangeId, value: number) => void
    }
    toolbar: {
      get_panels: () => MsfsPanel[]
      get_panel: (panel_id: string) => MsfsPanel
      close_panel: (panel_id: string) => void
    }
    datastore: {
      export: (data: Record<string, unknown>) => void
      import: (store: Record<string, unknown>) => Record<string, unknown>
    }
    community: {
      get_servers: () => MsfsServer[]
      get_server: () => MsfsServerID
      is_online: () => boolean
      set_server: (server_name: MsfsServerID) => void
    }
    airports: {
      find_airport_by_icao: (uid: string, icao: string, callback: (airports: Airport[]) => void) => void
      find_airports_by_coords: (
        uid: string,
        lon: number,
        lat: number,
        radius: number,
        limit: number,
        callback_added: (added: Airport[]) => void,
        callback_removed: (removed: Airport[]) => void,
        callback_failed: (error: unknown) => void,
        init: boolean
      ) => void
    }
    weather: {
      get_weather: () => WeatherPreset
      set_weather: (weather: WeatherPreset) => void
      get_presets: () => WeatherData[]
      set_preset: (preset_name: string) => void
      find_metar_by_icao: (icao: string, callback: (metar: WeatherMetar | null) => void) => void
      find_metar_from_coords: (lat: number, lon: number, callback: (metar: WeatherMetar | null) => void) => void
      set_3d_thermals: (state: boolean) => void
      get_3d_thermals: () => boolean
    }
    time: {
      get_sun_position: () => SunPosition
      get_sim_time_local: () => Date
      set_sun_offset_utc: (offset: number) => void
      set_local_time: (seconds: number) => void
      set_zulu_time: (seconds: number) => void
      set_time_by_moment: (moment: TimeMoment) => void
    }
    twitch: {
      is_connected: () => boolean
      send_message: (message: string, prefix?: string) => void
    }
  }

  function run(callback: () => void | number | boolean): void

  type ScrollEventSource = 'wheel' | 'otto' | 'debugger'
  interface ScrollEvent {
    from: ScrollEventSource
    scroll: number
  }
  type TileStyle = 'armed' | 'active' | 'error' | null

  type SingleSettingsDefinition = {
    label: string,
    description?: string,
  } & ({
    type: 'checkbox',
    value: boolean,
    changed: (value: boolean) => void
  } | {
    type: 'text',
    value: string
    changed: (value: string) => void
  })
  interface SettingsDefinition {
    [key: string]: SingleSettingsDefinition
  }

  function scroll(callback: (event: ScrollEvent) => void): void
  function exit(callback: () => void): void
  function state(callback: () => string): void
  function info(callback: () => string): void
  function style(callback: () => TileStyle): void
  function settings_define(definition: SettingsDefinition): void

  function loop_frame(callback: () => void): void
  function loop_1hz(callback: () => void): void
  function loop_15hz(callback: () => void): void
  function loop_30hz(callback: () => void): void
  function loop_60hz(callback: () => void): void

  interface SearchResult {
    uid: string
    label: string
    image?: string
    subtext?: string
    execute?: () => boolean | undefined
    is_text?: boolean
  }
  function search(prefixes: string[], callback: (query: string, callback: (result: SearchResult[]) => void) => void): void

  function html_created(callback: (el: HTMLElement) => void): void

  interface TwitchMessage {
    tags: {
      "badge-info"?: Record<string, string>
      badges?: Record<string, string>
      color?: string
      "display-name"?: string
      emotes?: string
      "first-msg"?: number
      id?: string
      mod?: string
      "returning-chatter"?: string
      "room-id"?: string
      subscriber?: string
      "tmi-sent-ts"?: string
      turbo?: string
      "user-id"?: string
      "user-type"?: string

      bits?: string
      "msg-id": "resub" | "highlighted-message"
      "msg-param-cumulative-months"?: string
      "msg-param-months"?: string
      "msg-param-multimonth-duration"?: string
      "msg-param-multimonth-tenure"?: string
      "msg-param-should-share-streak"?: string
      "msg-param-sub-plan-name"?: string
      "msg-param-sub-plan"?: string
      "msg-param-was-gifted"?: string
      "system-msg"?: string
    }
    source: {
      nick: string | null
      host: string
    }
    command: {
      command: string
      channel?: string
      botCommand?: string
      botCommandParams?: string
    }
    parameters: string
  }
  function twitch_connection(callback: (state: boolean) => void): void
  function twitch_message(callback: (message: TwitchMessage) => void): void
}
