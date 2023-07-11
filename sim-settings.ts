enum GraphicsSelect {
  PC,
  VR
}

enum GraphicsAntiAliasingPC {
  OFF,
  FXAA,
  DLAA,
  TAA,
  NVIDIA_DLSS_SUPER_RESOLUTION,
  AMD_FSR_2
}

enum GraphicsNvidiaDLSSSuperResolutionPC {
  AUTO,
  QUALITY,
  BALANCED,
  PERFORMANCE,
  ULTRA_PERFORMANCE,
  DLAA
}

enum GraphicsAMDFSR2PC {
  ULTRA_PERFORMANCE,
  PERFORMANCE,
  BALANCED,
  QUALITY
}

enum GraphicsNvidiaDLSSFrameGenerationPC {
  OFF,
  ON
}


enum GraphicsVSyncPC {
  OFF,
  ON
}

enum GraphicsNvidiaReflexLowLatencyPC {
  OFF,
  ON,
  ON_BOOST
}

enum GraphicsFrameRateLimitPC {
  P33_MONITOR_REFRESH_RATE,
  P50_MONITOR_REFRESH_RATE,
  P100_MONITOR_REFRESH_RATE
}

enum GraphicsHDR10PC {
  OFF,
  ON
}

enum GraphicsDirectXVersionPC {
  DX11,
  DX12_BETA
}

enum GraphicsGlobalRenderingQualityPC {
  LOW_END,
  MEDIUM,
  HIGH_END,
  ULTRA,
  CUSTOM
}

enum GraphicsOffScreenTerrainPreCachingPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTerrainVectorDataPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsBuildingsPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTreesPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsGrassAndBushesPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsVolumetricCloudsPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTextureResolutionPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsAnisotropicFilteringPC {
  OFF,
  _2X,
  _4X,
  _8X,
  _16X
}

enum GraphicsTextureSupersamplingPC {
  OFF,
  _2X2,
  _4X4,
  _6X6,
  _8X8
}

enum GraphicsTextureSynthesisPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsWaterWavesPC {
  LOW,
  MEDIUM,
  HIGH
}

enum GraphicsShadowMapsPC {
  _768,
  _1024,
  _1536,
  _2048
}

enum GraphicsTerrainShadowsPC {
  OFF,
  _128,
  _256,
  _512,
  _1024,
  _2048
}

enum GraphicsContactShadowsPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsWindshieldEffectsPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsAmbientOcclusionPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsCubemapReflectionsPC {
  _96,
  _128,
  _192,
  _256
}

enum GraphicsRaymarchedReflectionsPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsLightShaftsPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsBloomPC {
  OFF,
  ON
}

enum GraphicsDepthOfFieldPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsMotionBlurPC {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsLensCorrectionPC {
  OFF,
  ON
}

enum GraphicsLensFlarePC {
  OFF,
  ON
}

enum GraphicsGlassCockpitRefreshRatePC {
  LOW,
  MEDIUM,
  HIGH
}

enum GraphicsAntiAliasingVR {
  OFF,
  FXAA,
  DLAA,
  TAA,
  NVIDIA_DLSS_SUPER_RESOLUTION,
  AMD_FSR_2
}

enum GraphicsNvidiaDLSSSuperResolutionVR {
  AUTO,
  QUALITY,
  BALANCED,
  PERFORMANCE,
  ULTRA_PERFORMANCE,
  DLAA
}

enum GraphicsAMDFSR2VR {
  ULTRA_PERFORMANCE,
  PERFORMANCE,
  BALANCED,
  QUALITY
}

enum GraphicsReprojectionModeVR {
  OFF,
  DEPTH,
  DEPTH_AND_MOTION
}

enum GraphicsNvidiaReflexLowLatencyVR {
  OFF,
  ON,
  ON_BOOST
}

enum GraphicsGlobalRenderingQualityVR {
  DEFAULT,
  LOW_END,
  MEDIUM,
  HIGH_END,
  ULTRA
}

enum GraphicsOffScreenTerrainPreCachingVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTerrainVectorDataVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsBuildingsVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTreesVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsGrassAndBushesVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsVolumetricCloudsVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsTextureResolutionVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsAnisotropicFilteringVR {
  OFF,
  _2X,
  _4X,
  _8X,
  _16X
}

enum GraphicsTextureSupersamplingVR {
  OFF,
  _2X2,
  _4X4,
  _6X6,
  _8X8
}

enum GraphicsTextureSynthesisVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsWaterWavesVR {
  LOW,
  MEDIUM,
  HIGH
}

enum GraphicsShadowMapsVR {
  _768,
  _1024,
  _1536,
  _2048
}

enum GraphicsTerrainShadowsVR {
  OFF,
  _128,
  _256,
  _512,
  _1024,
  _2048
}

enum GraphicsContactShadowsVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsWindshieldEffectsVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsAmbientOcclusionVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsCubemapReflectionsVR {
  _96,
  _128,
  _192,
  _256
}

enum GraphicsRaymarchedReflectionsVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsLightShaftsVR {
  OFF,
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum GraphicsBloomVR {
  OFF,
  ON
}

enum GraphicsGlassCockpitRefreshRateVR {
  LOW,
  MEDIUM,
  HIGH
}

enum CameraCameraSelection {
  COCKPIT,
  CHASE
}

enum CameraQuickViewFunction {
  TOGGLE,
  HOLD
}

enum CameraSmartCamera {
  TOGGLE,
  HOLD
}

enum CameraZoomFunction {
  MANUAL,
  FOCUS
}

enum CameraFocusMode {
  TOGGLE,
  HOLD
}

enum CameraCockpitCameraSelection {
  LANDING,
  WIDE_ANGLE,
  CLOSE,
  HUD
}

enum CameraFreeLookMode {
  TOGGLE,
  HOLD
}

enum CameraFreeLookReset {
  MANUAL,
  AUTO
}

enum CameraHeadUpMode {
  TOGGLE,
  HOLD
}

enum CameraCameraShake {
  OFF,
  ON
}

enum CameraFlashlightMode {
  MANUAL,
  AUTO
}

enum CameraHomeCockpitMode {
  OFF,
  ON
}

enum CameraInstrumentViewMode {
  TOGGLE,
  HOLD
}

enum CameraInstrumentViewSelection {
  MANUAL,
  AUTO
}

enum CameraPOVReset {
  MANUAL,
  AUTO
}

enum SoundHeadphoneSimulation {
  OFF,
  ON
}

enum SoundWarningSoundsInExternalView {
  OFF,
  ON
}

enum SoundVHFSignalDegradation {
  OFF,
  ON
}

enum SoundActiveSpatialSound {
  OFF,
  ON
}

enum SoundConvertAudioToMono {
  OFF,
  ON
}

enum SoundATCTextToSpeechSettings {
  OFF,
  OFFLINE,
  AZURE
}

enum SoundMusicSelection {
  COLOR_1,
  COLOR_2,
  LEGACY
}

enum SoundMuteAudioInBackground {
  OFF,
  ON
}

enum TrafficSelect {
  PC,
  VR
}

enum TrafficAircraftTrafficTypePC {
  REAL_TIME_ONLINE,
  AI_OFFLINE,
  OFF
}

enum TrafficShowTrafficNameplatesPC {
  OFF,
  ON
}

enum TrafficUseGenericAircraftModelsPC {
  OFF,
  ON
}

enum TrafficShowMultiplayerAircraftInCloseProximityPC {
  OFF,
  ON
}

enum TrafficTrafficVarietyPC {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum TrafficAircraftTrafficTypeVR {
  REAL_TIME_ONLINE,
  AI_OFFLINE,
  OFF
}

enum TrafficShowTrafficNameplatesVR {
  OFF,
  ON
}

enum TrafficUseGenericAircraftModelsVR {
  OFF,
  ON
}

enum TrafficShowMultiplayerAircraftInCloseProximityVR {
  OFF,
  ON
}

enum TrafficTrafficVarietyVR {
  LOW,
  MEDIUM,
  HIGH,
  ULTRA
}

enum DataOnlineFunctionality {
  OFF,
  ON
}

enum DataBingDataWorldGraphics {
  OFF,
  ON
}

enum DataPhotogrammetry {
  OFF,
  ON
}

enum DataLiveRealWorldAirTraffic {
  OFF,
  ON
}

enum DataLiveWeather {
  OFF,
  ON
}

enum DataMultiplayer {
  OFF,
  ON
}


enum DataDataLimitation {
  OFF,
  ON
}

enum DataBandwidth {
  UNLIMITED,
  _5_MBIT_S,
  _20_MBIT_S,
  _40_MBIT_S
}

enum DataRollingCache {
  OFF,
  ON
}

enum FlightModelFlightModel {
  LEGACY,
  MODERN
}

enum FlightModelGlobalPreset {
  FSX,
  INTERMEDIATE,
  REALISTIC
}

enum MiscLanguage {
  EN_US,
  FR_FR,
  ES_ES,
  ES_MX,
  DE_DE,
  IT_IT,
  NL_NL,
  NB_NO,
  SV_SE,
  FI_FI,
  PL_PL,
  RU_RU,
  PT_BR,
  JA_JP,
  PT_PT,
  ZH_CN,
  KO_KR,
  TR_TR
}

enum MiscUnitsOfMeasurement {
  US_SYSTEM,
  METRIC_SYSTEM,
  HYBRID
}

enum MiscPilotAvatar {
  DEFAULT,
  PILOT_1,
  PILOT_2,
  PILOT_3,
  PILOT_4,
  CPT_MIKE_BARNES,
  PILOT_6,
  PILOT_7,
  PILOT_8,
  PILOT_9,
  PILOT_10,
  PILOT_11,
  PILOT_12,
  PILOT_13,
  PILOT_14,
  PILOT_15,
  PILOT_16,
  PILOT_17,
  CPT_JESS_MOLINA,
  PILOT_19,
  PILOT_20,
  PILOT_21,
  PILOT_22,
  PILOT_23,
  PILOT_24,
  LT_SIMON_HERNANDEZ,
  LT_DIANA_DRAYER
}

enum MiscCoPilotAvatar {
  DEFAULT,
  PILOT_1,
  PILOT_2,
  PILOT_3,
  PILOT_4,
  CPT_MIKE_BARNES,
  PILOT_6,
  PILOT_7,
  PILOT_8,
  PILOT_9,
  PILOT_10,
  PILOT_11,
  PILOT_12,
  PILOT_13,
  PILOT_14,
  PILOT_15,
  PILOT_16,
  PILOT_17,
  CPT_JESS_MOLINA,
  PILOT_19,
  PILOT_20,
  PILOT_21,
  PILOT_22,
  PILOT_23,
  PILOT_24,
  LT_SIMON_HERNANDEZ,
  LT_DIANA_DRAYER
}

enum MiscInstructor {
  DEFAULT,
  CPT_MIKE_BARNES,
  CPT_JESS_MOLINA
}

enum MiscMilitaryInstructor {
  DEFAULT,
  LT_SIMON_HERNANDEZ,
  LT_DIANA_DRAYER
}

enum AccessibilityEnableScreenNarrator {
  OFF,
  ON
}

enum AccessibilityCockpitInteractionSystem {
  LOCK,
  LEGACY
}

enum AccessibilityMenuTooltips {
  OFF,
  ON
}

enum AccessibilityInstrumentNameTooltips {
  OFF,
  INSTANT,
  DELAYED
}

enum AccessibilityInstrumentDescriptionTooltips {
  OFF,
  INSTANT,
  DELAYED
}


enum AccessibilityMainColor {
  DEFAULT,
  DEFAULT_HIGH_CONTRAST,
  PROTANOPIA,
  PROTANOPIA_HIGH_CONTRAST,
  DEUTERANOPIA,
  DEUTERANOPIA_HIGH_CONTRAST,
  TRITANOPIA,
  TRITANOPIA_HIGH_CONTRAST
}

enum AccessibilityMenuAnimations {
  OFF,
  ON
}

enum AccessibilitySkipPreFlightCinematics {
  OFF,
  ON
}


enum AccessibilityDPadMenuNavigation {
  OFF,
  ON
}


enum AccessibilitySubtitles {
  OFF,
  ON
}


enum AccessibilitySubtitleTextColor {
  WHITE,
  BLACK,
  RED,
  BLUE,
  YELLOW,
  GREEN
}

enum AccessibilitySubtitleBackgroundColor {
  WHITE,
  BLACK,
  RED,
  BLUE,
  YELLOW,
  GREEN,
  GREY,
  CYAN
}


enum DevelopersDeveloperMode {
  OFF,
  ON
}

enum VRModeGrabYoke {
  HOLD,
  TOGGLE
}

enum ExperimentalReplayTool {
  OFF,
  ON
}

enum ExperimentalLowPowerMode {
  OFF,
  ON
}

enum ExperimentalUseNanoVGForXMLGauges {
  OFF,
  ON
}

enum ExperimentalPackageReorderTool {
  OFF,
  ON
}


type SettingsSelect = GraphicsSelect | GraphicsAntiAliasingPC | GraphicsNvidiaDLSSSuperResolutionPC | GraphicsAMDFSR2PC | GraphicsNvidiaDLSSFrameGenerationPC | GraphicsVSyncPC | GraphicsNvidiaReflexLowLatencyPC | GraphicsFrameRateLimitPC | GraphicsHDR10PC | GraphicsDirectXVersionPC | GraphicsGlobalRenderingQualityPC | GraphicsOffScreenTerrainPreCachingPC | GraphicsTerrainVectorDataPC | GraphicsBuildingsPC | GraphicsTreesPC | GraphicsGrassAndBushesPC | GraphicsVolumetricCloudsPC | GraphicsTextureResolutionPC | GraphicsAnisotropicFilteringPC | GraphicsTextureSupersamplingPC | GraphicsTextureSynthesisPC | GraphicsWaterWavesPC | GraphicsShadowMapsPC | GraphicsTerrainShadowsPC | GraphicsContactShadowsPC | GraphicsWindshieldEffectsPC | GraphicsAmbientOcclusionPC | GraphicsCubemapReflectionsPC | GraphicsRaymarchedReflectionsPC | GraphicsLightShaftsPC | GraphicsBloomPC | GraphicsDepthOfFieldPC | GraphicsMotionBlurPC | GraphicsLensCorrectionPC | GraphicsLensFlarePC | GraphicsGlassCockpitRefreshRatePC | GraphicsAntiAliasingVR | GraphicsNvidiaDLSSSuperResolutionVR | GraphicsAMDFSR2VR | GraphicsReprojectionModeVR | GraphicsNvidiaReflexLowLatencyVR | GraphicsGlobalRenderingQualityVR | GraphicsOffScreenTerrainPreCachingVR | GraphicsTerrainVectorDataVR | GraphicsBuildingsVR | GraphicsTreesVR | GraphicsGrassAndBushesVR | GraphicsVolumetricCloudsVR | GraphicsTextureResolutionVR | GraphicsAnisotropicFilteringVR | GraphicsTextureSupersamplingVR | GraphicsTextureSynthesisVR | GraphicsWaterWavesVR | GraphicsShadowMapsVR | GraphicsTerrainShadowsVR | GraphicsContactShadowsVR | GraphicsWindshieldEffectsVR | GraphicsAmbientOcclusionVR | GraphicsCubemapReflectionsVR | GraphicsRaymarchedReflectionsVR | GraphicsLightShaftsVR | GraphicsBloomVR | GraphicsGlassCockpitRefreshRateVR | CameraCameraSelection | CameraQuickViewFunction | CameraSmartCamera | CameraZoomFunction | CameraFocusMode | CameraCockpitCameraSelection | CameraFreeLookMode | CameraFreeLookReset | CameraHeadUpMode | CameraCameraShake | CameraFlashlightMode | CameraHomeCockpitMode | CameraInstrumentViewMode | CameraInstrumentViewSelection | CameraPOVReset | SoundHeadphoneSimulation | SoundWarningSoundsInExternalView | SoundVHFSignalDegradation | SoundActiveSpatialSound | SoundConvertAudioToMono | SoundATCTextToSpeechSettings | SoundMusicSelection | SoundMuteAudioInBackground | TrafficSelect | TrafficAircraftTrafficTypePC | TrafficShowTrafficNameplatesPC | TrafficUseGenericAircraftModelsPC | TrafficShowMultiplayerAircraftInCloseProximityPC | TrafficTrafficVarietyPC | TrafficAircraftTrafficTypeVR | TrafficShowTrafficNameplatesVR | TrafficUseGenericAircraftModelsVR | TrafficShowMultiplayerAircraftInCloseProximityVR | TrafficTrafficVarietyVR | DataOnlineFunctionality | DataBingDataWorldGraphics | DataPhotogrammetry | DataLiveRealWorldAirTraffic | DataLiveWeather | DataMultiplayer | DataDataLimitation | DataBandwidth | DataRollingCache | FlightModelFlightModel | FlightModelGlobalPreset | MiscLanguage | MiscUnitsOfMeasurement | MiscPilotAvatar | MiscCoPilotAvatar | MiscInstructor | MiscMilitaryInstructor | AccessibilityEnableScreenNarrator | AccessibilityCockpitInteractionSystem | AccessibilityMenuTooltips | AccessibilityInstrumentNameTooltips | AccessibilityInstrumentDescriptionTooltips | AccessibilityMainColor | AccessibilityMenuAnimations | AccessibilitySkipPreFlightCinematics | AccessibilityDPadMenuNavigation | AccessibilitySubtitles | AccessibilitySubtitleTextColor | AccessibilitySubtitleBackgroundColor | DevelopersDeveloperMode | VRModeGrabYoke | ExperimentalReplayTool | ExperimentalLowPowerMode | ExperimentalUseNanoVGForXMLGauges | ExperimentalPackageReorderTool
type SettingsSelectId = "graphics_select" | "graphics_anti_aliasing_pc" | "graphics_nvidia_dlss_super_resolution_pc" | "graphics_amd_fsr_2_pc" | "graphics_nvidia_dlss_frame_generation_pc" | "graphics_v_sync_pc" | "graphics_nvidia_reflex_low_latency_pc" | "graphics_frame_rate_limit_pc" | "graphics_hdr10_pc" | "graphics_directx_version_pc" | "graphics_global_rendering_quality_pc" | "graphics_off_screen_terrain_pre_caching_pc" | "graphics_terrain_vector_data_pc" | "graphics_buildings_pc" | "graphics_trees_pc" | "graphics_grass_and_bushes_pc" | "graphics_volumetric_clouds_pc" | "graphics_texture_resolution_pc" | "graphics_anisotropic_filtering_pc" | "graphics_texture_supersampling_pc" | "graphics_texture_synthesis_pc" | "graphics_water_waves_pc" | "graphics_shadow_maps_pc" | "graphics_terrain_shadows_pc" | "graphics_contact_shadows_pc" | "graphics_windshield_effects_pc" | "graphics_ambient_occlusion_pc" | "graphics_cubemap_reflections_pc" | "graphics_raymarched_reflections_pc" | "graphics_light_shafts_pc" | "graphics_bloom_pc" | "graphics_depth_of_field_pc" | "graphics_motion_blur_pc" | "graphics_lens_correction_pc" | "graphics_lens_flare_pc" | "graphics_glass_cockpit_refresh_rate_pc" | "graphics_anti_aliasing_vr" | "graphics_nvidia_dlss_super_resolution_vr" | "graphics_amd_fsr_2_vr" | "graphics_reprojection_mode_vr" | "graphics_nvidia_reflex_low_latency_vr" | "graphics_global_rendering_quality_vr" | "graphics_off_screen_terrain_pre_caching_vr" | "graphics_terrain_vector_data_vr" | "graphics_buildings_vr" | "graphics_trees_vr" | "graphics_grass_and_bushes_vr" | "graphics_volumetric_clouds_vr" | "graphics_texture_resolution_vr" | "graphics_anisotropic_filtering_vr" | "graphics_texture_supersampling_vr" | "graphics_texture_synthesis_vr" | "graphics_water_waves_vr" | "graphics_shadow_maps_vr" | "graphics_terrain_shadows_vr" | "graphics_contact_shadows_vr" | "graphics_windshield_effects_vr" | "graphics_ambient_occlusion_vr" | "graphics_cubemap_reflections_vr" | "graphics_raymarched_reflections_vr" | "graphics_light_shafts_vr" | "graphics_bloom_vr" | "graphics_glass_cockpit_refresh_rate_vr" | "camera_camera_selection" | "camera_quick_view_function" | "camera_smart_camera" | "camera_zoom_function" | "camera_focus_mode" | "camera_cockpit_camera_selection" | "camera_free_look_mode" | "camera_free_look_reset" | "camera_head_up_mode" | "camera_camera_shake" | "camera_flashlight_mode" | "camera_home_cockpit_mode" | "camera_instrument_view_mode" | "camera_instrument_view_selection" | "camera_pov_reset" | "sound_headphone_simulation" | "sound_warning_sounds_in_external_view" | "sound_vhf_signal_degradation" | "sound_active_spatial_sound" | "sound_convert_audio_to_mono" | "sound_atc_text_to-speech_settings" | "sound_music_selection" | "sound_mute_audio_in_background" | "traffic_select" | "traffic_aircraft_traffic_type_pc" | "traffic_show_traffic_nameplates_pc" | "traffic_use_generic_aircraft_models_pc" | "traffic_use_generic_aircraft_models_pc" | "traffic_show_multiplayer_aircraft_in_close_proximity_pc" | "traffic_traffic_variety_pc" | "traffic_aircraft_traffic_type_vr" | "traffic_show_traffic_nameplates_vr" | "traffic_use_generic_aircraft_models_vr" | "traffic_use_generic_aircraft_models_vr" | "traffic_show_multiplayer_aircraft_in_close_proximity_vr" | "traffic_traffic_variety_vr" | "data_online_functionality" | "data_bing_data_world_graphics" | "data_photogrammetry" | "data_live_real_world_air_traffic" | "data_live_weather" | "data_multiplayer" | "data_data_limitation" | "data_bandwidth" | "data_rolling_cache" | "flight_model_flight_model" | "flight_model_global_preset" | "misc_language" | "misc_units_of_measurement" | "misc_pilot_avatar" | "misc_co_pilot_avatar" | "misc_instructor" | "misc_military_instructor" | "accessibility_enable_screen_narrator" | "accessibility_cockpit_interaction_system" | "accessibility_menu_tooltips" | "accessibility_instrument_name_tooltips" | "accessibility_instrument_description_tooltips" | "accessibility_main_color" | "accessibility_menu_animations" | "accessibility_skip_pre_flight_cinematics" | "accessibility_d_pad_menu_navigation" | "accessibility_subtitles" | "accessibility_subtitle_text_color" | "accessibility_subtitle_background_color" | "developers_developer_mode" | "vr_mode_grab_yoke" | "experimental_replay_tool" | "experimental_low_power_mode" | "experimental_use_nanovg_for_xml_gauges" | "experimental_package_reorder_tool"
type SettingsRangeId = "graphics_render_scaling_pc" | "graphics_amd_fidelityfx_sharpening_pc" | "graphics_terrain_level_of_detail_pc" | "graphics_objects_level_of_detail_pc" | "graphics_render_scaling_vr" | "graphics_amd_fidelityfx_sharpening_vr" | "graphics_world_scale_vr" | "graphics_terrain_level_of_detail_vr" | "graphics_objects_level_of_detail_vr" | "camera_height" | "camera_horizontal_position" | "camera_zoom" | "camera_zoom_speed" | "camera_freelook_speed" | "camera_freelook_momentum" | "camera_zoom_speed" | "camera_external_freelook_speed" | "camera_external_freelook_momentum" | "sound_master" | "sound_voices" | "sound_aircraft_engines" | "sound_aircraft_miscellaneous" | "sound_cockpit" | "sound_warnings" | "sound_other_aircraft" | "sound_environment" | "sound_user_interface" | "sound_music" | "traffic_ai_aircraft_traffic_density_pc" | "traffic_airport_vehicle_density_pc" | "traffic_ground_aircraft_density_pc" | "traffic_worker_density_pc" | "traffic_leisure_boats_pc" | "traffic_road_vehicles_pc" | "traffic_ships_and_ferries_pc" | "traffic_fauna_density_pc" | "traffic_ai_airliners_traffic_density_vr" | "traffic_ai_general_aviation_traffic_density_vr" | "traffic_airport_vehicle_density_vr" | "traffic_ground_aircraft_density_vr" | "traffic_worker_density_vr" | "traffic_leisure_boats_vr" | "traffic_road_vehicles_vr" | "traffic_ships_and_ferries_vr" | "traffic_fauna_density_vr" | "data_data_tracking_reset_day" | "data_data_warning" | "flight_model_generals" | "flight_model_crash_realism" | "flight_model_gyro" | "flight_model_p_factor" | "flight_model_torque" | "accessibility_screen_narrator_volume" | "accessibility_screen_narrator_pitch" | "accessibility_screen_narrator_speed" | "accessibility_minimum_text_size" | "accessibility_interface_scale" | "accessibility_background_opacity" | "accessibility_controller_vibration" | "accessibility_cursor_acceleration" | "accessibility_cursor_max_speed" | "accessibility_subtitle_text_size" | "accessibility_subtitle_background_opacity"
