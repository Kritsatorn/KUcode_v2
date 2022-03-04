import AudioPlayer from 'src/components/AudioPlayer'
export const QUERY = gql`
  query FindAudioPlayerQuery($id: Int!) {
    audioPlayer: learning(id: $id) {
      audioURL
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ audioPlayer, ...rest }) => {
  return <AudioPlayer audioURL={audioPlayer.audioURL} {...rest} />
}
