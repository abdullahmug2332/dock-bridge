import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
}

export default function AddToCartModal({ open, setOpen }: Props) {
  const navigate = useNavigate()

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogContent className="sm:max-w-md bg-white!">
        <DialogHeader>
          <DialogTitle>Product added to cart sucessfully! 🛒</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3 mt-4 bg-white">
          <Button
            onClick={() => navigate("/cart")}
            className="w-full"
          >
            View Cart
          </Button>

          <Button
            variant="secondary"
            onClick={() => navigate("/checkout")}
            className="w-full"
          >
            Check Out
          </Button>

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            Continue Shopping
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}