import MathJax from 'react-mathjax2';

function MathContext(props) {
    return(
        <MathJax.Context 
            input='tex'
            onError={ (MathJax, error) => {
                console.log("Foi encontrado um erro.")
            }}
            options={ {
                tex2jax: {
                    inlineMath: [["$", "$"]],
                    displayMath: [["$$", "$$"]],
                    preview: "none"
                }
            }}>
                <MathJax.Text text={ props.content } />
        </MathJax.Context>
    )
}

export default MathContext;