# Visual Height and Size Comparison Resources

A small, practical collection for comparing people, characters, objects, and real-world measurements on a consistent scale. The repository separates exact sourced values, rounded visual references, and derived calculations so they are not mistaken for the same kind of evidence.

## Start with the visual size comparison tool

[Open the visual size comparison](https://heightcomparer.com/size-comparison) to place people, screens, vehicles, animals, planets, or a custom image on one shared proportional scale. Every group identifies whether the number represents height, length, diagonal, or diameter.

Use the repository files when you need reusable data or want to reproduce the underlying scale calculation:

- [`data/reference-measurements.csv`](data/reference-measurements.csv) contains source URLs, measurement directions, original units, metric values, and evidence labels.
- [`docs/proportional-scale-method.md`](docs/proportional-scale-method.md) explains normalization, unit conversion, and the limits of cross-category comparisons.
- [`examples/scale.mjs`](examples/scale.mjs) converts any positive measurements into percentages of the largest value without external packages.

## Quick example

For values of 1.75 m, 3.3 m, and 5.5 m, divide each value by 5.5 m:

| Measurement | Relative height |
| ---: | ---: |
| 1.75 m | 31.82% |
| 3.3 m | 60.00% |
| 5.5 m | 100.00% |

Run the same calculation locally:

```bash
node examples/scale.mjs 1.75 3.3 5.5
```

## Focused calculators and visualizers

- [Height converter](https://heightcomparer.com/height-converter) — convert centimeters, meters, feet, inches, and feet-plus-inches while keeping every result synchronized with a proportional visual preview.
- [Height difference calculator](https://heightcomparer.com/height-difference) — enter two heights, calculate the exact gap in centimeters and inches, and view both people on one measured baseline.
- [Visual size comparison](https://heightcomparer.com/size-comparison) — compare people, screens, vehicles, animals, and planets on a shared proportional scale.
- [Adult height estimator](https://heightcomparer.com/how-tall-will-i-be) — estimate a target adult-height range from parental heights with the mid-parental method and its limits shown alongside the result.
- [HeightComparison.com](https://www.heightcomparison.com/) — a long-running visual lineup tool for people, celebrities, characters, and objects.
- [Hikaku Sitatter](https://hikaku-sitatter.com/en/) — a simple character-height comparison tool used by artists and character designers.
- [Compared Heights](https://comparedheights.com/) — sourced comparisons of people, landmarks, and objects, with retrieval details from Wikidata.

## Primary measurement references

- [NASA planet sizes](https://science.nasa.gov/solar-system/planet-sizes-and-locations-in-our-solar-system/) — equatorial diameters for the eight planets and five recognized dwarf planets.
- [NOAA Fisheries: blue whale](https://www.fisheries.noaa.gov/species/blue-whale) — an official reference reporting a maximum length of 110 feet.

The included CSV records when these source pages were reviewed. Living animals and manufactured objects vary, so a value must not be treated as a universal specification unless the source says that it is one.

## Choosing the right comparison

1. Use a height converter when one measurement needs to be restated accurately in another unit system.
2. Use a height difference calculator when the question is the exact gap between two people.
3. Use a height lineup when several people or characters need one common baseline.
4. Use a size comparison only after naming the dimension being compared. Height, length, diagonal, and diameter are not interchangeable.
5. Treat an adult-height estimate as a broad family-height reference, not a medical prediction.
6. Treat rounded animal, vehicle, and object measurements as references. Check a primary specification when precision matters.

## Disclosure

This collection is maintained by the maker of Height Comparer. Height Comparer links are identified directly above, and independent alternatives are included so the repository remains useful beyond one product.
