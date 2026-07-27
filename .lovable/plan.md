Convert the current large video embed at the top of the Active Merchant Key Resources tab into a compact resource card matching the other resource cards, and open the video in a modal when clicked.

**What we'll change**
1. In `src/components/merchant/ResourcesTab.tsx`, remove the existing large "Getting Started Video" block at the top of the tab.
2. Add a new resource card in the existing resource grid with:
   - Title: "Getting Started"
   - Icon: Play icon
   - Description: Brief text explaining the demo video
   - CTA: "Watch Video" button
3. Create or use a `Dialog` component (`src/components/ui/dialog.tsx` or new `WisetackVideoModal`) that opens when the CTA is clicked.
4. The modal will embed the existing Wisetack demo video iframe (`https://killerplayer.com/watch/video/45aa7290-e0c1-4e51-bc3a-381ee9bc4c77`) and will close via a close button or backdrop click.
5. Ensure the video stops playing when the modal closes (by unmounting or resetting the iframe `src`).

**Technical details**
- Use the existing shadcn `Dialog` primitive if present; otherwise create a lightweight modal component.
- Keep the existing `ResourceCard` pattern and external-link `Button` styling for visual consistency.
- The modal should be responsive, centered, and sized for a 16:9 video.
- Maintain TypeScript safety and Tailwind token usage.

**Files to edit**
- `src/components/merchant/ResourcesTab.tsx`
- Possibly `src/components/ui/dialog.tsx` (if not already available) or a new `src/components/WisetackVideoModal.tsx`