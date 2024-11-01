// export default [
//     {
//       featureType: "all",
//       elementType: "geometry.fill",
//       stylers: [
//         {
//           weight: "2.00",
//         },
//       ],
//     },
//     {
//       featureType: "all",
//       elementType: "geometry.stroke",
//       stylers: [
//         {
//           color: "#9c9c9c",
//         },
//       ],
//     },
//     {
//       featureType: "all",
//       elementType: "labels.text",
//       stylers: [
//         {
//           visibility: "on",
//         },
//       ],
//     },
//     {
//       featureType: "landscape",
//       elementType: "all",
//       stylers: [
//         {
//           color: "#f2f2f2",
//         },
//       ],
//     },
//     {
//       featureType: "landscape",
//       elementType: "geometry.fill",
//       stylers: [
//         {
//           color: "#ffffff",
//         },
//       ],
//     },
//     {
//       featureType: "landscape.man_made",
//       elementType: "geometry.fill",
//       stylers: [
//         {
//           color: "#ffffff",
//         },
//       ],
//     },
//     {
//       featureType: "poi",
//       elementType: "all",
//       stylers: [
//         {
//           visibility: "off",
//         },
//       ],
//     },
//     {
//       featureType: "road",
//       elementType: "all",
//       stylers: [
//         {
//           saturation: -100,
//         },
//         {
//           lightness: 45,
//         },
//       ],
//     },
//     {
//       featureType: "road",
//       elementType: "geometry.fill",
//       stylers: [
//         {
//           color: "#eeeeee",
//         },
//       ],
//     },
//     {
//       featureType: "road",
//       elementType: "labels.text.fill",
//       stylers: [
//         {
//           color: "#7b7b7b",
//         },
//       ],
//     },
//     {
//       featureType: "road",
//       elementType: "labels.text.stroke",
//       stylers: [
//         {
//           color: "#ffffff",
//         },
//       ],
//     },
//     {
//       featureType: "road.highway",
//       elementType: "all",
//       stylers: [
//         {
//           visibility: "simplified",
//         },
//       ],
//     },
//     {
//       featureType: "road.arterial",
//       elementType: "labels.icon",
//       stylers: [
//         {
//           visibility: "off",
//         },
//       ],
//     },
//     {
//       featureType: "transit",
//       elementType: "all",
//       stylers: [
//         {
//           visibility: "off",
//         },
//       ],
//     },
//     {
//       featureType: "water",
//       elementType: "all",
//       stylers: [
//         {
//           color: "#46bcec",
//         },
//         {
//           visibility: "on",
//         },
//       ],
//     },
//     {
//       featureType: "water",
//       elementType: "geometry.fill",
//       stylers: [
//         {
//           color: "#c8d7d4",
//         },
//       ],
//     },
//     {
//       featureType: "water",
//       elementType: "labels.text.fill",
//       stylers: [
//         {
//           color: "#070707",
//         },
//       ],
//     },
//     {
//       featureType: "water",
//       elementType: "labels.text.stroke",
//       stylers: [
//         {
//           color: "#ffffff",
//         },
//       ],
//     },
//   ];

export default [
  {
    featureType: "all",
    elementType: "geometry.fill",
    stylers: [
      {
        weight: "2.00",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#4a4a4a", // Darker grey for borders
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#a8d5ba", // Soft green for landscape
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#c5e1a5", // Light green for filled landscapes
      },
    ],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff", // Keep white for man-made structures
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "all",
    stylers: [
      {
        saturation: -100,
      },
      {
        lightness: 30, // Slightly lighter roads
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#f5f5f5", // Light grey for roads
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#3d3d3d", // Darker text for road labels
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff", // White stroke for better visibility
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "all",
    stylers: [
      {
        visibility: "simplified",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.icon",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#2196F3", // Bright blue for water
      },
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#4FC3F7", // Lighter blue for filled water
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff", // White text for water labels
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
];
