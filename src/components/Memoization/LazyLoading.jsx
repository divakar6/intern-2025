import { lazy, Suspense } from "react"

const Lazycomponent=lazy(()=>import("../about"))
const LazyLoading=()=>{
    return (
        <div>
            <Suspense fallback={<h2>loading.....</h2>}>
                <h2>this is LazyLoading page</h2>
                <Lazycomponent/>
            </Suspense>
        </div>
    )
}
export default LazyLoading