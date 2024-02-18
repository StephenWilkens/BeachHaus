export function VirtualTour() {
  return (
    <div className="bg-cyan-50">
      <h1 class="py-5 text-center text-4xl font-light md:pb-5 md:text-6xl">
        VIRTUAL TOUR
      </h1>
      <iframe
        width="100%"
        height="640"
        frameborder="0"
        allow="xr-spatial-tracking; gyroscope; accelerometer"
        allowfullscreen
        scrolling="no"
        src="https://kuula.co/share/collection/7JRtd?logo=1&info=1&logosize=44&fs=1&vr=1&zoom=1&sd=1&autorotate=0.02&autopalt=1&thumbs=2&margin=1"
      ></iframe>
    </div>
  );
}
