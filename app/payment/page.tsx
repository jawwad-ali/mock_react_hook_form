import { ClerkProvider, RedirectToSignIn, SignedIn, SignOutButton } from '@clerk/nextjs'

const Payment = () => {
    return (
        <div>
            {/* Sign out button */}
            <SignedIn>
                <SignOutButton />
            </SignedIn>
            Payment
        </div>
    )
}

export default Payment
