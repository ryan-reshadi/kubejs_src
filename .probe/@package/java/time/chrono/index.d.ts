import { $ZoneOffset, $LocalDate, $Period, $Instant, $ZoneId, $LocalDateTime, $Clock, $LocalTime } from "@package/java/time";
import { $Serializable } from "@package/java/io";
import { $DateTimeFormatter, $ResolverStyle_, $TextStyle_ } from "@package/java/time/format";
import { $Enum, $Comparable, $Object } from "@package/java/lang";
import { $Comparator, $List, $Map_, $Locale, $Set } from "@package/java/util";
import { $TemporalField, $TemporalAmount_, $Temporal, $ChronoField_, $TemporalUnit, $ValueRange, $TemporalQuery_, $TemporalAccessor, $TemporalAdjuster, $TemporalAmount, $TemporalAdjuster_ } from "@package/java/time/temporal";

declare module "@package/java/time/chrono" {
    export class $IsoEra extends $Enum<$IsoEra> implements $Era {
        static values(): $IsoEra[];
        static valueOf(arg0: string): $IsoEra;
        getValue(): number;
        static of(arg0: number): $IsoEra;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        adjustInto(arg0: $Temporal): $Temporal;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        isSupported(arg0: $TemporalField): boolean;
        static CE: $IsoEra;
        static BCE: $IsoEra;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $IsoEra}.
     */
    export type $IsoEra_ = "bce" | "ce";
    export class $ChronoZonedDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoZonedDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoZonedDateTime<never>;
    }
    export interface $ChronoZonedDateTime<D extends $ChronoLocalDate> extends $Temporal, $Comparable<$ChronoZonedDateTime<never>> {
        toEpochSecond(): number;
        toInstant(): $Instant;
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        withEarlierOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        isEqual(arg0: $ChronoZonedDateTime<never>): boolean;
        getChronology(): $Chronology;
        getZone(): $ZoneId;
        toLocalDateTime(): $ChronoLocalDateTime<D>;
        plus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        minus(arg0: $TemporalAmount_): $ChronoZonedDateTime<D>;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoZonedDateTime<D>;
        isAfter(arg0: $ChronoZonedDateTime<never>): boolean;
        isBefore(arg0: $ChronoZonedDateTime<never>): boolean;
        toLocalDate(): D;
        toLocalTime(): $LocalTime;
        getOffset(): $ZoneOffset;
        withZoneSameInstant(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withZoneSameLocal(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        withLaterOffsetAtOverlap(): $ChronoZonedDateTime<D>;
        get(arg0: $TemporalField): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoZonedDateTime<never>): number;
        getLong(arg0: $TemporalField): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoZonedDateTime<D>;
        "with"(arg0: $TemporalAdjuster_): $ChronoZonedDateTime<D>;
        plus(arg0: number, arg1: $TemporalUnit): $Temporal;
        get chronology(): $Chronology;
        get zone(): $ZoneId;
        get offset(): $ZoneOffset;
    }
    export class $AbstractChronology implements $Chronology {
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        compareTo(arg0: $Chronology): number;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        isIsoBased(): boolean;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        get isoBased(): boolean;
    }
    export class $ChronoPeriod {
        static between(arg0: $ChronoLocalDate, arg1: $ChronoLocalDate): $ChronoPeriod;
    }
    export interface $ChronoPeriod extends $TemporalAmount {
        normalized(): $ChronoPeriod;
        negated(): $ChronoPeriod;
        multipliedBy(arg0: number): $ChronoPeriod;
        isNegative(): boolean;
        getChronology(): $Chronology;
        isZero(): boolean;
        getUnits(): $List<$TemporalUnit>;
        plus(arg0: $TemporalAmount_): $ChronoPeriod;
        addTo(arg0: $Temporal): $Temporal;
        minus(arg0: $TemporalAmount_): $ChronoPeriod;
        subtractFrom(arg0: $Temporal): $Temporal;
        get(arg0: $TemporalUnit): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        get negative(): boolean;
        get chronology(): $Chronology;
        get zero(): boolean;
        get units(): $List<$TemporalUnit>;
    }
    export class $Era {
    }
    export interface $Era extends $TemporalAccessor, $TemporalAdjuster {
        query<R>(arg0: $TemporalQuery_<R>): R;
        range(arg0: $TemporalField): $ValueRange;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        adjustInto(arg0: $Temporal): $Temporal;
        get(arg0: $TemporalField): number;
        getLong(arg0: $TemporalField): number;
        getValue(): number;
        isSupported(arg0: $TemporalField): boolean;
        get value(): number;
    }
    /**
     * Values that may be interpreted as {@link $Era}.
     */
    export type $Era_ = (() => number);
    export class $ChronoLocalDateTime<D extends $ChronoLocalDate> {
        static timeLineOrder(): $Comparator<$ChronoLocalDateTime<never>>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDateTime<never>;
    }
    export interface $ChronoLocalDateTime<D extends $ChronoLocalDate> extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDateTime<never>> {
        toEpochSecond(arg0: $ZoneOffset): number;
        toInstant(arg0: $ZoneOffset): $Instant;
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDateTime<never>): boolean;
        getChronology(): $Chronology;
        adjustInto(arg0: $Temporal): $Temporal;
        plus(arg0: $TemporalAmount_): $ChronoLocalDateTime<D>;
        plus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDateTime<D>;
        isAfter(arg0: $ChronoLocalDateTime<never>): boolean;
        isBefore(arg0: $ChronoLocalDateTime<never>): boolean;
        toLocalDate(): D;
        toLocalTime(): $LocalTime;
        atZone(arg0: $ZoneId): $ChronoZonedDateTime<D>;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDateTime<never>): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalUnit): boolean;
        isSupported(arg0: $TemporalField): boolean;
        "with"(arg0: $TemporalField, arg1: number): $ChronoLocalDateTime<D>;
        minus(arg0: number, arg1: $TemporalUnit): $Temporal;
        minus(arg0: $TemporalAmount_): $Temporal;
        "with"(arg0: $TemporalAdjuster_): $Temporal;
        get chronology(): $Chronology;
    }
    export class $Chronology {
        static ofLocale(arg0: $Locale): $Chronology;
        static getAvailableChronologies(): $Set<$Chronology>;
        static of(arg0: string): $Chronology;
        static from(arg0: $TemporalAccessor): $Chronology;
        static get availableChronologies(): $Set<$Chronology>;
    }
    export interface $Chronology extends $Comparable<$Chronology> {
        prolepticYear(arg0: $Era_, arg1: number): number;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $ChronoLocalDate;
        dateYearDay(arg0: number, arg1: number): $ChronoLocalDate;
        dateNow(): $ChronoLocalDate;
        dateNow(arg0: $ZoneId): $ChronoLocalDate;
        dateNow(arg0: $Clock): $ChronoLocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $ChronoLocalDate;
        period(arg0: number, arg1: number, arg2: number): $ChronoPeriod;
        zonedDateTime(arg0: $Instant, arg1: $ZoneId): $ChronoZonedDateTime<$ChronoLocalDate>;
        zonedDateTime(arg0: $TemporalAccessor): $ChronoZonedDateTime<$ChronoLocalDate>;
        dateEpochDay(arg0: number): $ChronoLocalDate;
        getCalendarType(): string;
        eras(): $List<$Era>;
        isIsoBased(): boolean;
        range(arg0: $ChronoField_): $ValueRange;
        date(arg0: number, arg1: number, arg2: number): $ChronoLocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $ChronoLocalDate;
        date(arg0: $TemporalAccessor): $ChronoLocalDate;
        getDisplayName(arg0: $TextStyle_, arg1: $Locale): string;
        localDateTime(arg0: $TemporalAccessor): $ChronoLocalDateTime<$ChronoLocalDate>;
        isLeapYear(arg0: number): boolean;
        eraOf(arg0: number): $Era;
        epochSecond(arg0: $Era_, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $ZoneOffset): number;
        epochSecond(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $ZoneOffset): number;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $Chronology): number;
        getId(): string;
        get calendarType(): string;
        get isoBased(): boolean;
        get id(): string;
    }
    export class $ChronoLocalDate {
        static timeLineOrder(): $Comparator<$ChronoLocalDate>;
        static from(arg0: $TemporalAccessor): $ChronoLocalDate;
    }
    export interface $ChronoLocalDate extends $Temporal, $TemporalAdjuster, $Comparable<$ChronoLocalDate> {
        query<R>(arg0: $TemporalQuery_<R>): R;
        isEqual(arg0: $ChronoLocalDate): boolean;
        getChronology(): $Chronology;
        toEpochDay(): number;
        isLeapYear(): boolean;
        lengthOfMonth(): number;
        lengthOfYear(): number;
        atTime(arg0: $LocalTime): $ChronoLocalDateTime<never>;
        getEra(): $Era;
        adjustInto(arg0: $Temporal): $Temporal;
        minus(arg0: number, arg1: $TemporalUnit): $ChronoLocalDate;
        until(arg0: $ChronoLocalDate): $ChronoPeriod;
        until(arg0: $Temporal, arg1: $TemporalUnit): number;
        isAfter(arg0: $ChronoLocalDate): boolean;
        isBefore(arg0: $ChronoLocalDate): boolean;
        equals(arg0: $Object): boolean;
        toString(): string;
        hashCode(): number;
        compareTo(arg0: $ChronoLocalDate): number;
        format(arg0: $DateTimeFormatter): string;
        isSupported(arg0: $TemporalField): boolean;
        isSupported(arg0: $TemporalUnit): boolean;
        "with"(arg0: $TemporalAdjuster_): $ChronoLocalDate;
        plus(arg0: number, arg1: $TemporalUnit): $Temporal;
        plus(arg0: $TemporalAmount_): $Temporal;
        minus(arg0: $TemporalAmount_): $Temporal;
        "with"(arg0: $TemporalField, arg1: number): $Temporal;
        get chronology(): $Chronology;
        get leapYear(): boolean;
        get era(): $Era;
    }
    export class $IsoChronology extends $AbstractChronology implements $Serializable {
        dateYearDay(arg0: number, arg1: number): $LocalDate;
        dateYearDay(arg0: $Era_, arg1: number, arg2: number): $LocalDate;
        dateNow(arg0: $Clock): $LocalDate;
        resolveDate(arg0: $Map_<$TemporalField, number>, arg1: $ResolverStyle_): $LocalDate;
        period(arg0: number, arg1: number, arg2: number): $Period;
        dateEpochDay(arg0: number): $LocalDate;
        date(arg0: $Era_, arg1: number, arg2: number, arg3: number): $LocalDate;
        localDateTime(arg0: $TemporalAccessor): $LocalDateTime;
        static INSTANCE: $IsoChronology;
    }
}
