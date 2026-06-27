interface MaintenancePageProps {
  onBack?: () => void;
}

export function MaintenancePage({ onBack }: MaintenancePageProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundColor: 'var(--app-bg)',
        color: 'var(--app-text)'
      }}
    >
      <div className="text-center max-w-2xl">
        <h1
          className="uppercase mb-8"
          style={{
            fontFamily: "'Stylish', sans-serif",
            fontSize: 'var(--text-date-large)',
            fontWeight: 'var(--font-weight-semibold)'
          }}
        >
          Under Maintenance
        </h1>

        <p
          style={{
            fontFamily: "'Funnel Sans', sans-serif",
            fontSize: 'var(--text-h2)',
            fontWeight: 'var(--font-weight-regular)'
          }}
        >
          We're making things better. Check back soon!
        </p>
      </div>
    </div>
  );
}
