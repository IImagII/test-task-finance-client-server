import ContentLoader from 'react-content-loader'

const LoaderSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={450}
    height={300}
    viewBox="0 0 450 300"
    backgroundColor="#f5f3f7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="43" y="200" rx="3" ry="3" width="88" height="6" />
    <rect x="51" y="200" rx="3" ry="3" width="52" height="6" />
    <rect x="477" y="234" rx="3" ry="3" width="410" height="6" />
    <rect x="412" y="222" rx="3" ry="3" width="380" height="6" />
    <rect x="22" y="224" rx="3" ry="3" width="178" height="6" />
    <circle cx="55" cy="218" r="20" />
    <rect x="514" y="123" rx="0" ry="0" width="219" height="145" />
    <rect x="242" y="92" rx="0" ry="0" width="1" height="0" />
    <rect x="-34" y="-6" rx="0" ry="0" width="450" height="350" />
  </ContentLoader>
)

export default LoaderSkeleton
