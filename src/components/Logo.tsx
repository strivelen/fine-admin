export default function Logo() {
  const collapsed = useAppSelector(selectCollapsed);
  return (
    <div className="logo">
      <img style={{ width: 43 }} src="/logo64.png" />
      <div style={{ width: !collapsed ? 141 : 0, transition: 'width 0.3s' }}>
        <h1 className="logo_text">Fine Admin</h1>
      </div>
    </div>
  );
}
