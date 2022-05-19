initSidebarItems({"attr":[["flags","Attribute macro for defining flags using the `bitflags` crate. This macro will also define a `GFlags::type_` function and the `glib::Value` traits."],["object_interface","Macro for boilerplate of `ObjectInterface` implementations."],["object_subclass","Macro for boilerplate of `ObjectSubclass` implementations."]],"constant":[["CLONE_MACRO_LOG_DOMAIN","This is the log domain used by the [`clone!`][crate::clone!] macro. If you want to use a custom logger (it prints to stdout by default), you can set your own logger using the corresponding `log` functions."]],"derive":[["Boxed","Derive macro for defining a `BoxedType``::type_` function and the `glib::Value` traits."],["Downgrade","Macro for deriving implementations of `glib::clone::Downgrade` and `glib::clone::Upgrade` traits and a weak type."],["Enum","Derive macro for register a rust enum in the glib type system and derive the the `glib::Value` traits."],["ErrorDomain","Derive macro for defining a GLib error domain and its associated `ErrorDomain` trait."],["SharedBoxed","Derive macro for defining a `SharedType``::get_type` function and the `glib::Value` traits."],["Variant","Derive macro for serializing/deserializing custom structs/enums as `glib::Variant`s."]],"enum":[["ChecksumType",""],["DateMonth",""],["DateWeekday",""],["FileError",""],["GlibLoggerDomain","Enumeration of the possible domain handling behaviours for a `GlibLogger`."],["GlibLoggerFormat","Enumeration of the possible formatting behaviours for a `GlibLogger`."],["KeyFileError",""],["LogLevel",""],["LogWriterOutput",""],["OptionArg","The [`OptionArg`][crate::OptionArg] enum values determine which type of extra argument the options expect to find. If an option expects an extra argument, it can be specified in several ways; with a short option: `-x arg`, with a long option: `--name arg` or combined in a single argument: `--name=arg`."],["SeekType","An enumeration specifying the base position for a `g_io_channel_seek_position()` operation."],["TimeType","Disambiguates a given time in two ways."],["UnicodeScript","The [`UnicodeScript`][crate::UnicodeScript] enumeration identifies different writing systems. The values correspond to the names as defined in the Unicode standard. The enumeration has been added in GLib 2.14, and is interchangeable with `PangoScript`."],["UriError","Error codes returned by [`Uri`][crate::Uri] methods."],["UserDirectory","These are logical ids for special directories which are defined depending on the platform used. You should use [`user_special_dir()`][crate::user_special_dir()] to retrieve the full path associated to the logical id."],["VariantClass","The range of possible top-level types of [`Variant`][struct@crate::Variant] instances."]],"fn":[["access",""],["application_name",""],["base64_decode",""],["base64_encode",""],["charset","Obtain the character set for the current locale."],["check_version",""],["child_watch_future","Create a `Future` that will resolve once the child process with the given pid exits"],["child_watch_future_with_priority","Create a `Future` that will resolve once the child process with the given pid exits"],["codeset",""],["compute_checksum_for_bytes",""],["compute_checksum_for_data",""],["compute_hmac_for_bytes",""],["compute_hmac_for_data",""],["console_charset",""],["current_dir",""],["dcgettext",""],["dgettext",""],["dngettext",""],["dpgettext",""],["dpgettext2",""],["environ",""],["environ_getenv",""],["file_get_contents",""],["file_open_tmp",""],["file_set_contents",""],["file_set_contents_full",""],["filename_display_basename",""],["filename_display_name",""],["filename_from_uri",""],["filename_to_uri",""],["find_program_in_path",""],["format_size",""],["format_size_full",""],["future_with_timeout","Add a timeout to a `Future`."],["future_with_timeout_with_priority","Add a timeout to a `Future`."],["getenv",""],["home_dir",""],["host_name",""],["hostname_is_ascii_encoded",""],["hostname_is_ip_address",""],["hostname_is_non_ascii",""],["hostname_to_ascii",""],["hostname_to_unicode",""],["interval_stream","Create a `Stream` that will provide a value every given number of milliseconds."],["interval_stream_seconds","Create a `Stream` that will provide a value every given number of seconds."],["interval_stream_seconds_with_priority","Create a `Stream` that will provide a value every given number of seconds."],["interval_stream_with_priority","Create a `Stream` that will provide a value every given number of milliseconds."],["is_canonical_pspec_name",""],["language_names",""],["language_names_with_category",""],["listenv",""],["locale_variants",""],["log_default_handler",""],["log_remove_handler",""],["log_set_always_fatal",""],["log_set_default_handler","To set back the default print handler, use the [`log_unset_default_handler`] function."],["log_set_fatal_mask",""],["log_set_handler",""],["log_set_writer_func",""],["log_structured_array",""],["log_unset_default_handler","To set the default print handler, use the [`log_set_default_handler`] function."],["log_variant",""],["log_writer_default",""],["log_writer_default_set_use_stderr","Sets whether GLib log functions output to stderr or stdout."],["log_writer_default_would_drop",""],["log_writer_format_fields",""],["log_writer_is_journald",""],["log_writer_journald",""],["log_writer_standard_streams",""],["log_writer_supports_color",""],["main_current_source",""],["main_depth",""],["markup_escape_text",""],["mkdir_with_parents",""],["mkdtemp",""],["mkdtemp_full",""],["mkstemp",""],["mkstemp_full",""],["monotonic_time",""],["num_processors",""],["on_error_query",""],["on_error_stack_trace",""],["os_info",""],["prgname",""],["program_name","Same as `get_prgname()`."],["random_double",""],["random_double_range",""],["random_int",""],["random_int_range",""],["random_set_seed",""],["real_name",""],["real_time",""],["reload_user_special_dirs_cache",""],["rust_log_handler","Provides a glib log handler which routes all logging messages to the `log crate`."],["set_application_name",""],["set_prgname",""],["set_print_handler","To set back the default print handler, use the [`unset_print_handler`] function."],["set_printerr_handler","To set back the default print handler, use the [`unset_printerr_handler`] function."],["set_program_name","Same as `set_prgname()`."],["setenv",""],["shell_parse_argv",""],["shell_quote",""],["shell_unquote",""],["spaced_primes_closest",""],["spawn_async",""],["spawn_async_with_fds",""],["spawn_async_with_pipes",""],["spawn_check_exit_status","An old name for [`spawn_check_wait_status()`][crate::spawn_check_wait_status()], deprecated because its name is misleading."],["spawn_check_wait_status","Set `error` if `wait_status` indicates the child exited abnormally (e.g. with a nonzero exit code, or via a fatal signal)."],["spawn_command_line_async","A simple version of [`spawn_async()`][crate::spawn_async()] that parses a command line with [`shell_parse_argv()`][crate::shell_parse_argv()] and passes it to [`spawn_async()`][crate::spawn_async()]."],["system_config_dirs",""],["system_data_dirs",""],["timeout_future","Create a `Future` that will resolve after the given number of milliseconds."],["timeout_future_seconds","Create a `Future` that will resolve after the given number of seconds."],["timeout_future_seconds_with_priority","Create a `Future` that will resolve after the given number of seconds."],["timeout_future_with_priority","Create a `Future` that will resolve after the given number of milliseconds."],["tmp_dir",""],["unicode_script_from_iso15924",""],["unicode_script_to_iso15924",""],["unix_open_pipe",""],["unix_signal_future","Create a `Future` that will resolve once the given UNIX signal is raised"],["unix_signal_future_with_priority","Create a `Future` that will resolve once the given UNIX signal is raised"],["unix_signal_stream","Create a `Stream` that will provide a value whenever the given UNIX signal is raised"],["unix_signal_stream_with_priority","Create a `Stream` that will provide a value whenever the given UNIX signal is raised"],["unlink",""],["unset_print_handler","To set the default print handler, use the [`set_print_handler`] function."],["unset_printerr_handler","To set the default print handler, use the [`set_printerr_handler`] function."],["unsetenv",""],["uri_escape_string",""],["uri_parse_scheme",""],["uri_unescape_segment",""],["uri_unescape_string",""],["user_cache_dir",""],["user_config_dir",""],["user_data_dir",""],["user_name",""],["user_runtime_dir",""],["user_special_dir",""],["user_state_dir",""],["usleep",""],["uuid_string_is_valid",""],["uuid_string_random",""]],"macro":[["bool_error","Generic error used for functions that fail without any further information"],["clone","Macro for passing variables as strong or weak references into a closure."],["closure","Macro for creating a `Closure` object. This is a wrapper around `Closure::new` that automatically type checks its arguments at run-time."],["closure_local","The same as `closure!` but uses `Closure::new_local` as a constructor. This is useful for closures which can’t be sent across threads. See the documentation of `closure!` for details."],["debug","A macro which behaves exactly as `log::debug!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["error","A macro which behaves exactly as `log::error!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["g_critical","Macro used to log using GLib logging system. It uses g_log."],["g_debug","Macro used to log using GLib logging system. It uses g_log."],["g_error","Macro used to log using GLib logging system. It uses g_log."],["g_info","Macro used to log using GLib logging system. It uses g_log."],["g_log","Macro used to log using GLib logging system. It uses g_log."],["g_message","Macro used to log using GLib logging system. It uses g_log."],["g_print","Macro used to print messages. It uses g_print."],["g_printerr","Macro used to print error messages. It uses g_printerr."],["g_warning","Macro used to log using GLib logging system. It uses g_log."],["glib_boxed_inline_wrapper","Wrapper implementations for BoxedInline types. See `wrapper!`."],["glib_boxed_wrapper","Wrapper implementations for Boxed types. See `wrapper!`."],["glib_object_wrapper","ObjectType implementations for Object types. See `wrapper!`."],["glib_shared_wrapper","Wrapper implementations for shared types. See `wrapper!`."],["gstr","Converts a static string literal into a static nul-terminated string."],["info","A macro which behaves exactly as `log::info!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["log_structured","Macro used to log using GLib structured logging system."],["result_from_gboolean",""],["trace","A macro which behaves exactly as `log::trace!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["warn","A macro which behaves exactly as `log::warn!` except that it sets the current log target to the contents of a `G_LOG_DOMAIN` constant (and fails to build if not defined)."],["wrapper","Defines a wrapper type and implements the appropriate traits."]],"mod":[["boxed","`IMPL` Boxed wrapper implementation."],["boxed_inline","`IMPL` BoxedInline wrapper implementation."],["char",""],["clone",""],["closure",""],["collections",""],["error","`Error` binding and helper trait."],["functions",""],["object","`IMPL` Object wrapper implementation and `Object` binding."],["prelude","Traits and essential types intended for blanket imports."],["shared","`IMPL` Shared (reference counted) wrapper implementation."],["signal","`IMPL` Low level signal support."],["source",""],["subclass","Module containing infrastructure for subclassing `GObject`s and registering boxed types."],["thread_guard",""],["translate","Translation between GLib/GLib-based FFI types and their Rust counterparts."],["types","Runtime type information."],["value","`Value` binding and helper traits."],["variant","`Variant` binding and helper traits."],["wrapper","`IMPL` The `wrapper!` macro and miscellaneous wrapper traits."]],"static":[["CSET_A_2_Z",""],["CSET_DIGITS",""],["CSET_a_2_z",""],["KEY_FILE_DESKTOP_GROUP",""],["KEY_FILE_DESKTOP_KEY_ACTIONS",""],["KEY_FILE_DESKTOP_KEY_CATEGORIES",""],["KEY_FILE_DESKTOP_KEY_COMMENT",""],["KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE",""],["KEY_FILE_DESKTOP_KEY_EXEC",""],["KEY_FILE_DESKTOP_KEY_GENERIC_NAME",""],["KEY_FILE_DESKTOP_KEY_HIDDEN",""],["KEY_FILE_DESKTOP_KEY_ICON",""],["KEY_FILE_DESKTOP_KEY_MIME_TYPE",""],["KEY_FILE_DESKTOP_KEY_NAME",""],["KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN",""],["KEY_FILE_DESKTOP_KEY_NO_DISPLAY",""],["KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN",""],["KEY_FILE_DESKTOP_KEY_PATH",""],["KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY",""],["KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS",""],["KEY_FILE_DESKTOP_KEY_TERMINAL",""],["KEY_FILE_DESKTOP_KEY_TRY_EXEC",""],["KEY_FILE_DESKTOP_KEY_TYPE",""],["KEY_FILE_DESKTOP_KEY_URL",""],["KEY_FILE_DESKTOP_KEY_VERSION",""],["KEY_FILE_DESKTOP_TYPE_APPLICATION",""],["KEY_FILE_DESKTOP_TYPE_DIRECTORY",""],["KEY_FILE_DESKTOP_TYPE_LINK",""],["OPTION_REMAINING",""],["STR_DELIMITERS",""],["TEST_OPTION_ISOLATE_DIRS",""],["URI_RESERVED_CHARS_GENERIC_DELIMITERS",""],["URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS",""],["g_param_spec_types",""]],"struct":[["Binding","[`Binding`][crate::Binding] is the representation of a binding between a property on a [`Object`][crate::Object] instance (or source) and another property on another [`Object`][crate::Object] instance (or target)."],["BindingFlags","Flags to be passed to [`ObjectExt::bind_property()`][crate::prelude::ObjectExt::bind_property()] or [`ObjectExt::bind_property_full()`][crate::prelude::ObjectExt::bind_property_full()]."],["BindingGroup","The [`BindingGroup`][crate::BindingGroup] can be used to bind multiple properties from an object collectively."],["BindingGroupBuilder","Builder for binding group bindings."],["BoxedAnyObject","This is a subclass of `glib::object::Object` capable of storing any Rust type. It let’s you insert a Rust type anywhere a `glib::object::Object` is needed. The inserted value can then be borrowed as a Rust type, by using the various provided methods."],["ByteArray",""],["Bytes","A shared immutable byte slice (the equivalent of `Rc<[u8]>`)."],["Checksum",""],["CollationKey","A `CollationKey` allows ordering strings using the linguistically correct rules for the current locale."],["Date",""],["DateTime",""],["EnumClass","Representation of an `enum` for dynamically, at runtime, querying the values of the enum and using them."],["EnumValue","Representation of a single enum value of an `EnumClass`."],["FileSetContentsFlags",""],["FilenameCollationKey","A `FilenameCollationKey` allows ordering file names using the linguistically correct rules for the current locale. Compared to `CollationKey`, filename collation keys take into consideration dots and other characters commonly found in file names."],["FlagsBuilder","Builder for conveniently setting/unsetting flags and returning a `Value`."],["FlagsClass","Representation of a `flags` for dynamically, at runtime, querying the values of the enum and using them"],["FlagsValue","Representation of a single flags value of a `FlagsClass`."],["FormatSizeFlags",""],["FutureWithTimeoutError","The error returned when a future times out."],["GStr","Representaion of a borrowed [`GString`]."],["GString","A type representing an owned, C-compatible, nul-terminated UTF-8 string."],["GStringBuilder","A mutable text buffer that grows automatically."],["GlibLogger","An implementation of a `log` compatible logger which logs over glib logging facilities."],["IOCondition",""],["KeyFile",""],["KeyFileFlags",""],["LogField","Structure representing a single field in a structured log entry."],["LogHandlerId",""],["LogLevelFlags",""],["LogLevels",""],["MainContext",""],["MainContextAcquireGuard",""],["MainContextFlags","Flags to pass to [`MainContext::with_flags()`][crate::MainContext::with_flags()] which affect the behaviour of a [`MainContext`][crate::MainContext]."],["MainLoop","The `GMainLoop` struct is an opaque data type representing the main event loop of a GLib or GTK+ application."],["OptionFlags","Flags which modify individual options."],["ParamFlags","Through the [`ParamFlags`][crate::ParamFlags] flag values, certain aspects of parameters can be configured."],["ParamSpec","[`ParamSpec`][crate::ParamSpec] is an object structure that encapsulates the metadata required to specify parameters, such as e.g. [`Object`][crate::Object] properties."],["ParamSpecBoolean",""],["ParamSpecBooleanBuilder",""],["ParamSpecBoxed",""],["ParamSpecBoxedBuilder",""],["ParamSpecChar",""],["ParamSpecCharBuilder",""],["ParamSpecDouble",""],["ParamSpecDoubleBuilder",""],["ParamSpecEnum",""],["ParamSpecEnumBuilder",""],["ParamSpecFlags",""],["ParamSpecFlagsBuilder",""],["ParamSpecFloat",""],["ParamSpecFloatBuilder",""],["ParamSpecGType",""],["ParamSpecGTypeBuilder",""],["ParamSpecInt",""],["ParamSpecInt64",""],["ParamSpecInt64Builder",""],["ParamSpecIntBuilder",""],["ParamSpecLong",""],["ParamSpecLongBuilder",""],["ParamSpecObject",""],["ParamSpecObjectBuilder",""],["ParamSpecOverride",""],["ParamSpecOverrideBuilder",""],["ParamSpecParam",""],["ParamSpecParamBuilder",""],["ParamSpecPointer",""],["ParamSpecPointerBuilder",""],["ParamSpecString",""],["ParamSpecStringBuilder",""],["ParamSpecUChar",""],["ParamSpecUCharBuilder",""],["ParamSpecUInt",""],["ParamSpecUInt64",""],["ParamSpecUInt64Builder",""],["ParamSpecUIntBuilder",""],["ParamSpecULong",""],["ParamSpecULongBuilder",""],["ParamSpecUnichar",""],["ParamSpecUnicharBuilder",""],["ParamSpecValueArray",""],["ParamSpecValueArrayBuilder",""],["ParamSpecVariant",""],["ParamSpecVariantBuilder",""],["Quark",""],["Receiver","A `Receiver` that can be attached to a main context to receive items from its corresponding `Sender` or `SyncSender`."],["Sender","A `Sender` that can be used to send items to the corresponding main context receiver."],["SignalFlags","The signal flags are used to specify a signal’s behaviour."],["SignalGroup","[`SignalGroup`][crate::SignalGroup] manages to simplify the process of connecting many signals to a [`Object`][crate::Object] as a group. As such there is no API to disconnect a signal from the group."],["Source","The `GSource` struct is an opaque data type representing an event source."],["SourceFuture","Represents a `Future` around a `glib::Source`. The future will be resolved once the source has provided a value"],["SourceStream","Represents a `Stream` around a `glib::Source`. The stream will be provide all values that are provided by the source"],["SpawnFlags","Flags passed to `g_spawn_sync()`, [`spawn_async()`][crate::spawn_async()] and `g_spawn_async_with_pipes()`."],["SyncSender","A `SyncSender` that can be used to send items to the corresponding main context receiver."],["ThreadPool","The [`ThreadPool`][crate::ThreadPool] struct represents a thread pool. It has three public read-only members, but the underlying struct is bigger, so you must not copy this struct."],["TimeSpan","A value representing an interval of time, in microseconds."],["TimeZone","[`TimeZone`][crate::TimeZone] is an opaque structure whose members cannot be accessed directly."],["Uri","The [`Uri`][crate::Uri] type and related functions can be used to parse URIs into their components, and build valid URIs from individual components."],["UriFlags","Flags that describe a URI."],["UriHideFlags","Flags describing what parts of the URI to hide in [`Uri::to_string_partial()`][crate::Uri::to_string_partial()]. Note that [`PASSWORD`][Self::PASSWORD] and [`AUTH_PARAMS`][Self::AUTH_PARAMS] will only work if the [`Uri`][crate::Uri] was parsed with the corresponding flags."],["UriParamsFlags","Flags modifying the way parameters are handled by `g_uri_parse_params()` and `GUriParamsIter`."],["ValueArray",""],["VariantDict","`VariantDict` is a mutable key/value store where the keys are always strings and the values are `Variant`s."],["VariantIter","Iterator over items in a variant."],["VariantStrIter","Iterator over items in a variant of type `as`."],["VariantTy","Describes `Variant` types."],["VariantTyIterator","An iterator over the individual components of a tuple [VariantTy]."],["VariantType","Describes `Variant` types."]],"trait":[["ParamSpecType",""]],"type":[["DateDay",""],["DateYear",""],["Time",""]]});