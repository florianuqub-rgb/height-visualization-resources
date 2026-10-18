# Proportional scale method

A visual size comparison is accurate only when every displayed subject uses the same unit, baseline, and scale factor.

## 1. Name the measurement

Record the direction before recording the number:

- people: standing height;
- screens: diagonal, with an aspect ratio stated separately;
- road vehicles: overall length for a named model or a clearly labeled class reference;
- quadruped animals: shoulder height, body length, or total length;
- planets: equatorial or mean diameter.

Numbers with different measurement directions can share a visual scale, but the result is a magnitude comparison rather than a like-for-like anatomical or geometric comparison.

## 2. Convert to one base unit

Useful exact conversion factors:

```text
meters = centimeters / 100
meters = millimeters / 1000
meters = inches * 0.0254
meters = feet * 0.3048
meters = kilometers * 1000
```

Keep the source value as well as the converted value. This makes rounding and transcription errors easier to audit.

## 3. Normalize to the largest value

For a subject with measurement `x` and a group maximum `max`:

```text
relative_percent = (x / max) * 100
display_pixels = (x / max) * available_pixels
```

The same factor must be applied to every subject. Do not set a separate maximum for each item.

Example for 1.75 m, 3.3 m, and 5.5 m:

```text
1.75 / 5.5 * 100 = 31.82%
3.30 / 5.5 * 100 = 60.00%
5.50 / 5.5 * 100 = 100.00%
```

## 4. Preserve one baseline

Align standing-height subjects at their feet and length-based objects at a named origin. A shared zero point prevents vertical offsets from being mistaken for differences in size.

## 5. Label evidence quality

- **Primary source:** a government, scientific, or manufacturer source that directly supports the value.
- **Derived:** calculated from a sourced value using a stated formula.
- **Rounded reference:** useful for visual orientation, but variable by model, individual, or measuring convention.

The file [`../data/reference-measurements.csv`](../data/reference-measurements.csv) follows this distinction. For an interactive implementation, use the [visual size comparison tool](https://heightcomparer.com/size-comparison).
